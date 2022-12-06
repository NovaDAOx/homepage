//@ts-nocheck
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Web3Service } from './web3.service';

declare let window: any;
@Injectable({
  providedIn: 'root',
})
export class MetamaskService {
  accountChanged = new BehaviorSubject<any>(null);
  logout = new BehaviorSubject<any>(null);
  firstTimeMetamaskConnect = new BehaviorSubject<any>(null);
  networkID = environment.networkId;

  constructor(
    private web3Service: Web3Service,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.detectMetamaskAccountChanged();
    this.detectChainChanged();
  }

  async isMetaMaskConnected() {
    try {
      const networkId = await this.getNetwork();
      console.log('this is networkId',this.networkID)
      console.log('this is users networkId',networkId)
      // console.log(networkId + '===' + this.networkID);
      if (networkId === this.networkID) {
        return await this.web3Service.getAccount();
      } else {
        this.openWrontNetworkDialoag();
        return null;
      }
    } catch (error) {
      return null;
    }
  }

  public async getNetwork() {
    return await this.web3Service.getNetworkId();
  }

  navigationUser(url: string): void {
    if ( window && window.ethereum && window.ethereum.isMetaMask) {
     
      const provider = window.ethereum
      const providere = window.ethereum.provider
      const pro = window.ethereum.isCoinbaseWallet
      // const provider2 = window.ethereum.providers.find((provider) => provider.isMetaMask);
      // provider2.request({ method: 'eth_requestAccounts' });
      if (provider) {
        let netId = window.ethereum.chainId;
        console.log('nnnnnnnnnnnnnnn',netId)
        if(netId != '0xaa36a7')
        {
          this.snackBar.open(
            'Wrong Network \n Please Connect to Sepolia Testnet','X',
            {
              panelClass:'error-snackbar',
              duration:4000,
              horizontalPosition:'end',
            }
          );
          return false;
        }
        switch (netId) {
          case '0x1':
            console.log('This is Ethereum Main Network (MainNet).');
            this.snackBar.open(
              'This is Ethereum Main Network (MainNet).',
              'X',
              {
                duration: 4000,
                panelClass: ['success-order'],
                horizontalPosition: 'end',
              }
            );
            break;
          case '0x3':
            console.log('This is Ropsten Test Network.');
            this.snackBar.open('This is Ropsten Test Network.', 'X', {
              duration: 4000,
              panelClass: ['success-order'],
              horizontalPosition: 'end',
            });
            break;
          case '0x4':
            console.log('This is Rinkeby Test Network.');
            this.snackBar.open('This is Rinkeby Test Network.', 'X', {
              duration: 4000,
              panelClass: ['success-order'],
              horizontalPosition: 'end',
            });
            break;
          case '0x5':
            console.log('This is Goerli Test Network.');
            this.snackBar.open('This is Goerli Test Network.', 'X', {
              duration: 4000,
              panelClass: ['success-order'],
              horizontalPosition: 'end',
            });
            
            break;
            
          case '0x42':
            console.log('This is Kovan Test Network.');
            this.snackBar.open('This is Kovan Test Network.', 'X', {
              duration: 4000,
              panelClass: ['success-order'],
              horizontalPosition: 'end',
            });
            break;
            case '0xaa36a7':
              console.log('This is Sopolia Test Network');
              this.snackBar.open('This is Sopolia Test Network', 'X',{
                duration:3000,
                panelClass:['success-order'],
                horizontalPosition:'end',
              });
              break;
          default:
            console.log('This is an unknown network.');
            this.snackBar.open('This is an unknown network.', 'X', {
              duration: 4000,
              panelClass: ['success-order'],
              horizontalPosition: 'end',
            });
        }
        this.enableMetamask(url);
      }
    } else {
      console.log('Please install metamask');
      this.snackBar.open('Please install metamask', 'X', {
        duration: 4000,
        panelClass: ['success-order'],
        horizontalPosition: 'end',
      });
    }
  }

  async sendTransaction(price: number) {
    if (window && window.ethereum && window.ethereum.isMetaMask) {
      let data = await this.web3Service.buyItem(price);
      return data;
    } else {
      console.log('Please install metamask');
      this.snackBar.open('Please install metamask', 'X', {
        duration: 4000,
        panelClass: ['success-order'],
        horizontalPosition: 'end',
      });
      return null;
    }
  }

  enableMetamask(url: string): void {
    this.web3Service
      .enableMetaMaskAccount()
      .then(async () => {
        let metamask_connection_status = await this.isMetaMaskConnected();
        if (metamask_connection_status) {
          window.localStorage.setItem('logout', 'false');
          this.firstTimeMetamaskConnect.next('firstTimeMetamaskConnect');
          // this.router.navigate([url]);
          this.snackBar.open('Metamask Connected', 'X', {
            duration: 4000,
            panelClass: ['success-order'],
            horizontalPosition: 'end',
          });
        }
      })
      .catch((error) => {
        console.log('dddddddddddddddddddddd',error)
      //   // this.snackBar.open(
      //   //   'Please check your metamask. Connect it manually',
      //   //   'X',
      //   //   {
      //   //     duration: 4000,
      //   //     panelClass: ['error-snackbar'],
      //   //     horizontalPosition: 'end',
      //   //   }
      //   );
      });
  }

  detectMetamaskAccountChanged() {
    if (window && window.ethereum) {
      /***********************************************************/
      /* Handle user accounts and accountsChanged (per EIP-1193) */
      /***********************************************************/
      var handleAccountsChanged = (accounts: any) => {
        if (accounts.length === 0) {
          // MetaMask is locked or the user has not connected any accounts
          localStorage.setItem('logout', 'true');
          localStorage.removeItem('walletId');
          this.logout.next('logout');
          console.log('Please connect to MetaMask.');
          this.accountChanged.next('Account_Changes_detected');
        } else if (accounts[0] !== currentAccount) {
          // console.log('Account Changes detected', accounts);
          this.accountChanged.next('Account_Changes_detected');
          // this.snackBar.open('Account Changes detected',  accounts[0], { duration: 4000, panelClass: ['success-order'], horizontalPosition: 'end'});
          currentAccount = accounts[0];
          // Do any other work!
        }
      };
      let currentAccount: any = null;
      window.ethereum
        .request({ method: 'eth_accounts' })
        .then(handleAccountsChanged)
        .catch((err: any) => {
          // Some unexpected error.
          // For backwards compatibility reasons, if no accounts are available,
          // eth_accounts will return an empty array.
          console.error(err);
        });
      // Note that this event is emitted on page load.
      // If the array of accounts is non-empty, you're already
      // connected.
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      this.CheckNetwork();
      // For now, 'eth_accounts' will continue to always return an array
      /*********************************************/
      /* Access the user's accounts (per EIP-1102) */
      /*********************************************/
    }
  }

  public async CheckNetwork() {
    const networkId = await this.web3Service.getNetworkId();
    if (networkId !== this.networkID) {
      this.openWrontNetworkDialoag();
    }
  }

  public async detectChainChanged() {
    if (window.ethereum) {
      await window.ethereum.on('chainChanged', async (changedChain: string) => {
        this.CheckNetwork();
      });
    }
  }

  openWrontNetworkDialoag() {
    if (this.networkID === 1) {
      alert('Wrong Network, Please connect to Ethereum Mainnet');
    }
    if (this.networkID === 4) {
      alert('Wrong Network, Please connect to a Test Network');
    }
   
    this.logoutAccount();
  }

  logoutAccount() {
    window.localStorage.setItem('logout', 'true');
    window.localStorage.removeItem('walletId');
    this.router.navigate(['']);
  }
}
