import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {Moralis} from 'moralis'
import { MoralisService } from 'src/app/services/moralis.service';
import { MetamaskService } from 'src/app/services/metamask.service';
import { Web3Service } from 'src/app/services/web3.service';
import {EtherService} from 'src/app/services/ether.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NgxSpinnerService } from 'ngx-spinner';
import { NftService } from 'src/app/services/nft.service';
import { MetamaskComponent } from 'src/app/dashboard/metamask/metamask.component';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-stake',
  templateUrl: './stake.component.html',
  styleUrls: ['./stake.component.scss'],
  encapsulation:ViewEncapsulation.None,
})

 export class StakeComponent implements OnInit {
 
  // constructor(private moralisservice:MoralisService) { }
list:String[]
loadFirstTime: boolean = true;
isMetamask:boolean = true ;
public userOb = this.moralisservice.observeUser();


constructor(
  private router: Router,
  public dialog: MatDialog,
  private metaMaskService: MetamaskService,
  private moralisservice:MoralisService,
  private web3Service: Web3Service,
  private etherService: EtherService,
  private snack: MatSnackBar,
  private spinner: NgxSpinnerService
  

)
 {}
interact()
{
  this.etherService.interact().then(data => {
    console.log(',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',data)
    
  })
}
  allNFT()
 {
   const userAddress = localStorage.getItem('walletId')
   if(userAddress) 
   {
     
   console.log('this is user address from staking page',userAddress)
    this.moralisservice.getnfts().then(data => {
    console.log('stake.companent',data)
    this.list=data
    this.NFTbtn='show'
    this.loading=null;
    if(data.length == 0)
    {
      this.NFTtoadx="notoadx collection found"
      this.NFTbtn=null;
    }
    console.log('2116',this.list)
    
  })
}
else
{
  console.log('please connet wallet ');
  
}
}
dialogConfig = new MatDialogConfig();
'dialogueReference': MatDialogRef<MetamaskComponent>;
isConnected: any = null;
loading: any = null;
NFTtoadx: any =null;
NFTbtn: any = null;


  ngOnInit(): void {
    this.allNFT();
    
    // if (history.state.routedFrom == 'stake') {
    //   location.href = 'home#roadmap';
    // }
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
        this.loading = null;
        this.NFTbtn= null;
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
        this.loading = null ;
        this.NFTbtn = null;
        this.checkIfUserWalletConnected();
      }
    });

    if (window.localStorage.getItem('logout') == 'false') {
      this.checkIfUserWalletConnected();
    }

   
    
    
  }
  async checkIfUserWalletConnected() {
    this.isConnected = await this.metaMaskService.isMetaMaskConnected();
    if (!this.isConnected) {
      this.isMetamask = false;
      localStorage.setItem('logout', 'true');
      localStorage.removeItem('walletId');
    } else {
      localStorage.setItem('walletId', this.isConnected);
      this.moralisservice.startMoralis().subscribe(() => console.log('Started Moralis'));
      this.loading = 'Loading...'
      console.log('Loading....')
      this.userOb.subscribe(console.log);
      this.allNFT();

    }
  }


  showMetamaskContent() {
    this.dialogueReference = this.dialog.open(MetamaskComponent, {
      panelClass: 'custom-modalbox',
      disableClose: true,
      data: (this.dialogConfig.data = {
        metamaskContent: true,
      }),
    });
    this.dialogueReference.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }


  

  changeScrollbar() {
    this.router.navigate(['/home'], { state: { routedFrom: 'stake' } });
  }
}
