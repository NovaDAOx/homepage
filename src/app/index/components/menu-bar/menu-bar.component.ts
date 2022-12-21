//@ts-nocheck
import { environment } from 'src/environments/environment';
import { Component, OnInit,Input, HostListener } from '@angular/core';
import { MetamaskService } from 'src/app/services/metamask.service';
import { MetamaskComponent } from 'src/app/dashboard/metamask/metamask.component';
import { NftService } from 'src/app/services/nft.service';
import { Web3Service } from 'src/app/services/web3.service';

import {
    MatDialog,
    MatDialogConfig,
    MatDialogRef,
  } from '@angular/material/dialog';
import { MoralisService } from 'src/app/services/moralis.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})

export class MenuBarComponent implements OnInit {
    clientUrl = environment.clientUrl;
    isShow: boolean = false;
    topPosToStartShowing = 100;
    gotHitElements = {};
    isLineFilled = false;
    counter: number = 0;
    isMetamask: boolean = false;
    isConnected: any = null;
    customData: any;
    pendingNFT: any = [];
    projectcount: number = 0;
    number: Number = 100;
    loadFirstTime: boolean = true;
    dialogConfig = new MatDialogConfig();
    'dialogueReference': MatDialogRef<MetamaskComponent>;
    walletAddress = '';

  constructor(
      public dialog: MatDialog,
      private metaMaskService: MetamaskService,
      private nftService: NftService,
      private moralisservice:MoralisService,
      private web3service:Web3Service,
    ) {}

    toggle() {
      document.getElementById("myDropdown").classList.toggle("show");
      // document.getElementById("navi").classList.toggle("rtoate180");
      document.getElementsByClassName("fa-chevron-down")[0].classList.toggle("rtoate180");
    }
   
  ngOnInit(): void {
    // this.test();    
    
    if (!window.localStorage.getItem('logout')) {
        window.localStorage.setItem('logout', 'false');
      }
      this.metaMaskService.accountChanged.subscribe((data) => {
        
        if (
          this.loadFirstTime == false &&
          data &&
          window.localStorage.getItem('logout') == 'false'
        ) {
          this.isConnected = null;
          this.checkIfUserWalletConnected();
        } else if (
          this.loadFirstTime == true &&
          data &&
          window.localStorage.getItem('logout') == 'false'
        ) {
          this.loadFirstTime = false;
        }
      });

      this.metaMaskService.firstTimeMetamaskConnect.subscribe((data: any) => {
        if (data === 'firstTimeMetamaskConnect') {
          this.isConnected = null;
          this.checkIfUserWalletConnected();
        }
      });

      if (window.localStorage.getItem('logout') == 'false') {
        this.checkIfUserWalletConnected();
      }

      
  }
  
  checkStatus(userAddress: any) {
    this.nftService.getMintDetails(userAddress).subscribe((data) => {
      this.pendingNFT = data;
    });
  }

  async checkIfUserWalletConnected() {
    this.isConnected = await this.metaMaskService.isMetaMaskConnected();
    if (!this.isConnected) {
      this.isMetamask = false;
      localStorage.setItem('logout', 'true');
      localStorage.removeItem('walletId');
    } else {
      localStorage.setItem('walletId', this.isConnected);
      
    }
  }

  // dialog box for user connect to metamask wallet
  showMetamaskContent() {
  
    this.dialogueReference = this.dialog.open(MetamaskComponent, {
      panelClass: 'custom-modalbox',
      disableClose: true,
      data: (this.dialogConfig.data = {
        metamaskContent: true,
      }),
    });
    const data = document.getElementsByClassName('cdk-overlay-container')[0]
    data.style.visibility = 'visible'
    this.dialogueReference.afterClosed().subscribe((result) => {
      const data = document.getElementsByClassName('cdk-overlay-container')[0]
      data.style.visibility = 'hidden'
    });
  }
// async connect()
// {
//   const data = this.web3service.init();
  
//   this.web3service.onConnect();
//   const test = this.web3service.onConnect();
//   console.log('this is test data from menubar menubar menubar components')
// }
// async init()
// {
//   this.web3service.init();
//   console.log('this is the data initialization of ....')
// }
  // dialog box for alert
  alertDialog() {
    this.dialogueReference = this.dialog.open(MetamaskComponent, {
      panelClass: 'modalPending_list',
      disableClose: true,
      data: (this.dialogConfig.data = {
        alertBox: true,
      }),
    });
  }
  @HostListener('window:click',['$event'])
  test(event)
  {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  async test()
{
 
  // this.moralisservice.getnfts().then(data => {
  //   console.log('ttttttttttttttttttttttttttttt',data)
  // })
  // const data = await document.getElementById('ProtectedDAO')
  // console.log(data,'???????????????????????????????????????????')
}
}
