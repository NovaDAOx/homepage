import { environment } from 'src/environments/environment';
import { Component, OnInit,Input } from '@angular/core';
import { MetamaskService } from 'src/app/services/metamask.service';
import { MetamaskComponent } from 'src/app/dashboard/metamask/metamask.component';
import { NftService } from 'src/app/services/nft.service';

import {
    MatDialog,
    MatDialogConfig,
    MatDialogRef,
  } from '@angular/material/dialog';

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
    ) {}

  ngOnInit(): void {
    
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

    this.dialogueReference.afterClosed().subscribe((result) => {
     
    });
  }

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

}
