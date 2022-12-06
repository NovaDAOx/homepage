//@ts-nocheck
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MetamaskService } from 'src/app/services/metamask.service';
declare var WalletConnect: any;
declare var WalletConnectQRCodeModal: any;


@Component({
  selector: 'app-metamask',
  templateUrl: './metamask.component.html',
  styleUrls: ['./metamask.component.scss'],
})


export class MetamaskComponent implements OnInit {
  metamaskContent = false;
  alertBox = false;
  marketPlace = false;
  hideMarketPlace = false;
  emailSubscribe = false;
  loader = false;
  routing = '';


Web3Modal = window.Web3Modal;
WalletConnectProvider = window.WalletConnectProvider;
EvmChains = window.EvmChains;
Fortmatic = window.Fortmatic;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dailogRef: MatDialogRef<MetamaskComponent>,
    private metaMaskService: MetamaskService
  ) {
    if (data) {
      this.metamaskContent = data.metamaskContent;
      this.marketPlace = data.marketPlace;
      this.alertBox = data.alertBox;
      this.emailSubscribe = data.emailSubscribe;
      this.routing = data.routing;
    }
  }

  ngOnInit(): void {
   this.start();
  }
  async tested()
  {
  const connector = new WalletConnect.default({
    bridge: 'https://bridge.walletconnect.org',
    qrcodeModal: WalletConnectQRCodeModal.default,
  });

  // Check if connection is already established
  connector.createSession();

  // Subscribe to connection events
  connector.on('connect', (error, payload) => {
    if (error) {
      throw error;
    }

    // Get provided accounts and chainId
    const { accounts, chainId } = payload.params[0];

    console.log(accounts);

    debugger;

    const msgParams = [
      accounts[0],
      `0x${this.toHex('testing message')}`, // Required
    ];

    // Sign message
    connector
      .signPersonalMessage(msgParams)
      .then((sig) => {
        // Returns signature.
        console.log(sig);
      })
      .catch((error) => {
        // Error returned when rejected
        console.error(error);
      });
  });

  connector.on('session_update', (error, payload) => {
    if (error) {
      throw error;
    }

    // Get updated accounts and chainId
    const { accounts, chainId } = payload.params[0];
  });

  connector.on('disconnect', (error, payload) => {
    if (error) {
      throw error;
    }
  });
}

  closeDialog() {
    this.dailogRef.close();
    // const faded = document.getElementsByClassName('cdk-overlay-container')[0]
    // faded.style.visibility = 'hidden'
  }
  connectMetamask() {
    this.dailogRef.close();
     
    this.metaMaskService.navigationUser(this.routing);
    window.localStorage.setItem('logout', 'false');
    const faded = document.getElementsByClassName('cdk-overlay-container')[0]
    faded.style.visibility = 'visible !important'   
    $('.new_strokedbtn').click(function() {
      console.log('this is it ')
   });
  }


  
// import { useConnected, ConnectButton, useConnectModal } from '@web3modal/react'
// export default function YourAppContent() {
//   const { isOpen, open, close } = useConnectModal()
//   const { connected } = useConnected()

//   return (
//     <>
//       <div>{!isConnected ? <ConnectButton /> : accountButton()}</div>
//       {/* or */}
//       <button onClick={open}>Open Modal</button>
//     </>
//   )
// }
"use strict";

/**
 * Example JavaScript code that interacts with the page and Web3 wallets
 */

 // Unpkg imports


// Web3modal instance
web3Modal:any 

// Chosen wallet provider given by the dialog window
provider:any;


// Address of the selected account
selectedAccount:any;


/**
 * Setup the orchestra
 */
 async start() {

  console.log("Initializing example");
  console.log("WalletConnectProvider is", WalletConnectProvider);
  

  // Tell Web3modal what providers we have available.
  // Built-in web browser provider (only one can exist as a time)
  // like MetaMask, Brave or Opera is added automatically by Web3modal
  let providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        // Mikko's test key - don't copy as your mileage may vary
        infuraId: "0605aa1e6f894991bbba609c93062b80",
      }
    },

  //   fortmatic: {
  //     package: Fortmatic,
  //     options: {
  //       // Mikko's TESTNET api key
  //       key: "pk_test_391E26A3B43A3350"
  //     }
  //   }
   };
 const Web3Modal = window.Web3Modal;
  

  
  this.web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
  });
  const arr = []
  arr.push(this.web3Modal)
  console.log('tttttttttttttttttttttttt',arr)
return this.web3Modal
}


/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async  fetchAccountData() {

  // Get a Web3 instance for the wallet
  const web3 = new Web3(this.provider);

  console.log("Web3 instance is", web3);

  // Get connected chain id from Ethereum node
  const chainId = await web3.eth.getChainId();
  // Load chain information over an HTTP API
  const chainData = await EvmChains.getChain(chainId);
  document.querySelector("#network-name").textContent = chainData.name;

  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();

  // MetaMask does not give you all accounts, only the selected account
  console.log("Got accounts", accounts);
  selectedAccount = accounts[0];

  document.querySelector("#selected-account").textContent = selectedAccount;

  // Get a handl
  const template = document.querySelector("#template-balance");
  const accountContainer = document.querySelector("#accounts");

  // Purge UI elements any previously loaded accounts
  accountContainer.innerHTML = '';

  // Go through all accounts and get their ETH balance
  const rowResolvers = accounts.map(async (address) => {
    const balance = await web3.eth.getBalance(address);
    // ethBalance is a BigNumber instance
    // https://github.com/indutny/bn.js/
    const ethBalance = web3.utils.fromWei(balance, "ether");
    const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
    // Fill in the templated row and put in the document
    const clone = template.content.cloneNode(true);
    clone.querySelector(".address").textContent = address;
    clone.querySelector(".balance").textContent = humanFriendlyBalance;
    accountContainer.appendChild(clone);
  });

  // Because rendering account does its own RPC commucation
  // with Ethereum node, we do not want to display any results
  // until data for all accounts is loaded
  await Promise.all(rowResolvers);

  // Display fully loaded UI for wallet data
  document.querySelector("#prepare").style.display = "none";
  document.querySelector("#connected").style.display = "block";
}



/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */
async  refreshAccountData() {

  // If any current data is displayed when
  // the user is switching acounts in the wallet
  // immediate hide this data
  document.querySelector("#connected").style.display = "none";
  document.querySelector("#prepare").style.display = "block";

  // Disable button while UI is loading.
  // fetchAccountData() will take a while as it communicates
  // with Ethereum node via JSON-RPC and loads chain data
  // over an API call.
  document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
  await this.fetchAccountData(provider);
  document.querySelector("#btn-connect").removeAttribute("disabled")
}


/**
 * Connect wallet button pressed.
 */
async onConnect() {
  const providerOptionss = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        // Mikko's test key - don't copy as your mileage may vary
        infuraId: "0605aa1e6f894991bbba609c93062b80",
      }
    }
  }
console.log(providerOptionss,'ppppppppppppppoooooooooooo')
  let Web3MOdal = window.Web3Modal.default;
  this.web3Mmodal = new Web3MOdal({
   bridge:"https://bridge.walletconnect.org",
   qrcodeModal:QRCodeModal,
    
  });
   console.log("Opening a dialog......", this.web3Mmodal);
  const arra = []
 
  try {
    this.provider = await this.web3Modal.connect();
    console.log('connected connected connected ',this.provider)
  } catch(e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  // Subscribe to accounts change
  this.provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
  });

  // Subscribe to chainId change
  this.provider.on("chainChanged", (chainId) => {
    fetchAccountData();
  });

  // Subscribe to networkId change
  this.provider.on("networkChanged", (networkId) => {
    fetchAccountData();
  });

  await refreshAccountData();
}

/**
 * Disconnect wallet button pressed.
 */
async  onDisconnect() {

  console.log("Killing the wallet connection", provider);

  // TODO: Which providers have close method?
  if(provider.close) {
    await provider.close();

    // If the cached provider is not cleared,
    // WalletConnect will default to the existing session
    // and does not allow to re-scan the QR code with a new wallet.
    // Depending on your use case you may want or want not his behavir.
    await web3Modal.clearCachedProvider();
    provider = null;
  }

  selectedAccount = null;

  // Set the UI back to the initial state
  document.querySelector("#prepare").style.display = "block";
  document.querySelector("#connected").style.display = "none";
}


/**
 * Main entry point.
 */
// window: any.addEventListener('load', async () => {
//   init();
//   document.querySelector("#btn-connect").addEventListener("click", onConnect);
//   document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
// });

}
