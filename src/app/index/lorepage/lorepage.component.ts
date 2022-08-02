import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MetamaskService } from 'src/app/services/metamask.service';
import { Web3Service } from 'src/app/services/web3.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { NftService } from 'src/app/services/nft.service';
import { MetamaskComponent } from 'src/app/dashboard/metamask/metamask.component';

@Component({
  selector: 'app-lorepage',
  templateUrl: './lorepage.component.html',
  styleUrls: ['./lorepage.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class LorepageComponent implements OnInit {

  clientUrl = environment.clientUrl;

  isShow: boolean = false;
  topPosToStartShowing = 100;
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
  mintObj: any = {
    walletAddress: '',
    mintHash: '',
    status: '',
    txnHash: '',
  };
  obj: any = {
    _id: '',
    status: '',
    txnHash: '',
  };

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private metaMaskService: MetamaskService,
    private web3Service: Web3Service,
    private snack: MatSnackBar,
    private spinner: NgxSpinnerService,
    private nftService: NftService,
    private titleService: Title
  ) {
   
    this.titleService.setTitle('Nova Deus');
  }

  ngOnInit(): void {
    this.gotoTop();
    if (history.state.routedFrom == 'mint') {
      location.href = 'home#roadmap';
    }

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
    const userAddress = localStorage.getItem('walletId');
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
      console.log('The dialog was closed');
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

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    //console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

}
