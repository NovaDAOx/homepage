  import {Injectable } from '@angular/core';
  // import { WEB3 } from '../../core/web3';
  import { MatSnackBar } from '@angular/material/snack-bar';
  import { environment } from 'src/environments/environment';
  import Web3 from 'web3';
  // import { Web3ModalService } from '@mindsorg/web3modal-angular';
  import WalletConnectProvider from '@walletconnect/web3-provider';
  
  
  // import Torus from '@toruslabs/torus-embed';
  // import Portis from '@portis/web3';





  // const Web3Modal = window.Web3Modal.default;
  // const WalletConnectProvider = window.WalletConnectProvider.default;
  // const EvmChains = window.EvmChains;
  // const Fortmatic = window.Fortmatic;
  
  
  let web3 = new Web3(Web3.givenProvider);

  const { NFTAbi } = require('../abi/nft.js');

  const { NFTAbi2 } = require('../abi/collectionAbi.js');



  declare let window: any;
  declare let web3modal:any;

  @Injectable({
    providedIn: 'root',
  })
  export class Web3Service {
    private web3Http = web3;
    public contractAddress = environment.NFTContractAddress;
    networkID = environment.networkId;
    constructor(private snackBar: MatSnackBar) {}

    /***
     * Get Account of Metamask Wallet
     */
    

    public async getAccount(): Promise<any> {
      try {
        const accounts = await web3.eth.getAccounts();
        if (window && window.ethereum ) {
         
          const data = await window.ethereum.request({
            method: 'eth_accounts',
          });
          console.log('metamask metamask metamask')
          console.log('meta',data)
          return data.length > 0 ? data[0] : null;
        } else {
          return null;
        }
      } catch (e) {
        console.log('meta error',e)
        return null;
      }
    }
    public async etherMetaConnect(): Promise<any>
    {}
    public async enableMetaMaskAccount(): Promise<any> {
      try {
        const data = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        return data[0];
      } catch (e) {
        this.snackBar.open('Please connect metamask manually', 'X', {
          duration: 4000,
          panelClass: ['error-snackbar'],
          horizontalPosition: 'end',
        });
        return '';
      }
    }

    public async rugsContract() {
      return new this.web3Http.eth.Contract(NFTAbi, this.contractAddress);
    }

    public async createContract(contractAddress: string) {
      const abiData = NFTAbi2[contractAddress];
      return new this.web3Http.eth.Contract(abiData, contractAddress);
    }

    async whoOwnThisToken(tokenId: any, contractAddress: string) {
      //console.log('tokenId', tokenId, 'contractAddress', contractAddress);
      const contract = await this.createContract(contractAddress);
      return contract.methods.ownerOf(tokenId).call();
    }

    async mintNFT(nftQuantity) {
      console.log('nftQuantity',nftQuantity)
      const contract = await this.rugsContract();
      const priceHex = await this.getNFTPrice();
      const nftCost = Number(this.web3Http.utils.fromWei(priceHex));
      

      const finalCost = Number((nftCost * nftQuantity).toFixed(1));

      const nftObj = contract.methods.mint(Number(nftQuantity)).encodeABI();
      console.log('cost',finalCost )

      const userAddress = localStorage.getItem('walletId');
      const amount = this.web3Http.utils.toHex(
        this.web3Http.utils.toWei(finalCost.toString(), 'ether')
      );
      const nftObject = {
        from: userAddress,
        to: this.contractAddress,
        data: nftObj,
        value: amount,
        chainId: this.networkID,
      };
      try {
        const txHash = await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [nftObject],
        });
        console.log('txhash of nft', txHash);
        return txHash;
      } catch (e) {
        //console.log('catch', e);
        return null;
      }
    }
    async getTotalMintedNFT() {
      const contract = await this.rugsContract();
      const result = await contract.methods.totalSupply().call();
      return result;
    }

    async getNFTPrice() {
      const contract = await this.rugsContract();
      console.log('ppppppp',contract)
      const result = await contract.methods.price().call();
      return result;
    }

    async getMintedNFT(): Promise<any> {
      const contract = await this.rugsContract();
      console.log('mmmmmmmmmmmmmmmmmmmmm',contract)
      const userAddress = localStorage.getItem('walletId');
      if (userAddress) {
        const result = await contract.methods.balanceOf(userAddress).call();
        const array = []
        for(var i = 0;i < result; i++)
        {
          
          const metadata = await contract.methods.tokenURI('4').call();
          const name = await contract.methods.name().call();
          array.push({name:name,url:metadata})
          console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',array)
        }
      
      
        
        console.log(array)
        return result;
      } else {
        this.snackBar.open('Please connect metamask ', 'X', {
          duration: 4000,
          panelClass: ['error-snackbar'],
          horizontalPosition: 'end',
        });
        return null;
      }
    }
    async getUserNFT(): Promise<any> {
      const contract = await this.rugsContract();
      console.log('mmmmmmmmmmmmmmmmmmmmm',contract)
      const userAddress = localStorage.getItem('walletId');
      if (userAddress) {
        const result = await contract.methods.balanceOf(userAddress).call();
        const array = []
        for(var i = 0;i < result; i++)
        {
          
          const metadata = await contract.methods.tokenURI('4').call();
          const name = await contract.methods.name().call();
          array.push({name:name,url:metadata})
          console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',array)
        }
      
      
        
        console.log(array)
        return array;
      } else {
        this.snackBar.open('Please connect metamask ', 'X', {
          duration: 4000,
          panelClass: ['error-snackbar'],
          horizontalPosition: 'end',
        });
        return null;
      }
    }

    async getTransactionResults(transactionHash: any) {
      const max = 150;
      const fetchTransactionResult: any = (count: any, max: any) => {
        if (count > max) {
          return Promise.reject('error');
        }
        return this.getTransactionResult(transactionHash, this.web3Http).catch(
          () => fetchTransactionResult(count + 1, max)
        );
      };
      return fetchTransactionResult(0, max);
    }
    async getTransactionResult(transactionHash: any, ethWeb: any) {
      const result = await ethWeb.eth.getTransactionReceipt(transactionHash);
      if (!result) {
        throw new Error('error');
      }
      return result;
    }

    async getTransactionDetails(txnHash: any) {
      const result = await this.web3Http.eth.getTransaction(txnHash);
      const balance = await this.web3Http.utils.fromWei(result.value, 'ether');
      if (!balance) {
        throw new Error('error');
      }
      return balance;
    }

    logsOfBatch() {
      const subscription = this.web3Http.eth
        .subscribe('pendingTransactions', (error: any, result: any) => {
          if (error) {
            console.log('error', error);
          } else {
            console.log(result);
          }
        })
        .on('data', (transaction: any) => {
          console.log(transaction);
        });
      subscription.unsubscribe((error: any, success: any) => {
        if (error) {
          console.log('error', error);
        }
        if (success) {
          console.log('succesfully unsbscribe');
        }
      });
    }

    async getLogs(receipt: any) {
      console.log;
      const eventAbi = NFTAbi.filter((item: any) => {
        return item.type === 'event' && item.name === 'mintedTokens';
      });
      const logs = this.web3Http.eth.abi.decodeLog(
        eventAbi[0].inputs,
        receipt.logs[2].data,
        receipt.logs[2].topics.slice(1)
      );
      return logs.tokenCounter;
    }

    async transferLogs(receipt: any) {
      console.log('transferLogs', receipt);
      const eventAbi = NFTAbi.filter((item: any) => {
        return item.type === 'event' && item.name === 'transferBadge';
      });
      const logs = this.web3Http.eth.abi.decodeLog(
        eventAbi[0].inputs,
        receipt.logs[2].data,
        receipt.logs[2].topics.slice(1)
      );
      return logs.status;
    }

    public async getNetworkId() {
      const web3 = new Web3(window.ethereum);
      const networkId = await web3.eth.net.getId();
      return networkId;
    }

    async buyItem(ethAmount: number) {
      if (window && window.ethereum.isMetaMask && localStorage.getItem('walletId')) {
        const netId = await this.getNetworkId();
        if (netId === this.networkID) {
          const accountAddress = localStorage.getItem('walletId');
          const amount = this.web3Http.utils.toHex(
            this.web3Http.utils.toWei(ethAmount.toString(), 'ether')
          );
          const txObject = {
            from: accountAddress,
            to: environment.RECEIVING_ADDRESS,
            value: amount,
            chainId: this.networkID,
          };
          const txHash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [txObject],
          });
          return txHash;
        } else {
          if (this.networkID === 1) {
            alert('Wrong Network, Please connect to Ethereum Mainnet');
          }
          if (this.networkID === 3) {
            alert('Wrong Network, Please connect to Sepolia Test Network');
          }
          return null;
        }
      } else {
        return null;
      }
    }


    // Web3modal instance


// Chosen wallet provider given by the dialog window



// Address of the selected account



/**
 * Setup the orchestra
 */
// init() {

//   console.log("Initializing example");
//   console.log("WalletConnectProvider is", WalletConnectProvider);
//   console.log("Fortmatic is", Fortmatic);

//   // Tell Web3modal what providers we have available.
//   // Built-in web browser provider (only one can exist as a time)
//   // like MetaMask, Brave or Opera is added automatically by Web3modal
//   const providerOptions = {
//     walletconnect: {
//       package: WalletConnectProvider,
//       options: {
//         // Mikko's test key - don't copy as your mileage may vary
//         infuraId: "0605aa1e6f894991bbba609c93062b80",
//       }
//     },

//     // fortmatic: {
//     //   package: Fortmatic,
//     //   options: {
//     //     // Mikko's TESTNET api key
//     //     key: "pk_test_391E26A3B43A3350"
//     //   }
//     // }
//   };

//   web3modal = new Web3Modal({
//     cacheProvider: false, // optional
//     providerOptions, // required
//   });

// }

// async onConnect() {

//   console.log("Opening a dialog", web3modal);
//   try {
//     const provider = await web3modal.connect();
//   } catch(e) {
//     console.log("Could not get a wallet connection", e);
//     return;
//   }
//   }


  

  }