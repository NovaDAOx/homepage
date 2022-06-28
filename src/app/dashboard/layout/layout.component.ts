import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MetamaskService } from 'src/app/services/metamask.service';
import { MetamaskComponent } from '../metamask/metamask.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent implements OnInit {
  dialogConfig = new MatDialogConfig();
  'dialogueReference': MatDialogRef<MetamaskComponent>;
  constructor(
    public dialog: MatDialog,
    private metaMaskService: MetamaskService,
    private snackbar: MatSnackBar
  ) {
    this.checkIfUserWalletConnected();
  }

  isMetamask: boolean = false;
  isConnected: any = null;
  customData: any;

  loadFirstTime: boolean = true;

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
      if (data && data === 'firstTimeMetamaskConnect') {
        this.isConnected = null;
        this.checkIfUserWalletConnected();
      }
    });
  }

  logout() {
    this.isConnected = null;
    this.metaMaskService.logoutAccount();

    this.snackbar.open('Logout Successfully', 'X', {
      duration: 4000,
      horizontalPosition: 'end',
      panelClass: 'success-order',
    });
  }

  async checkIfUserWalletConnected() {
    this.isConnected = await this.metaMaskService.isMetaMaskConnected();
    if (!this.isConnected) {
      this.isMetamask = false;
      localStorage.setItem('logout', 'true');
      localStorage.removeItem('walletId');
      this.snackbar.open('Please Connect your Metamask', 'X', {
        duration: 4000,
        horizontalPosition: 'end',
        panelClass: ['error-snackbar'],
      });
    } else {
      localStorage.setItem('logout', 'false');
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
        routing: '/shop',
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

  openSubsmodal() {
    // this.dialogueReference = this.dialog.open(MetamaskComponent, {
    //   panelClass: 'emailSubscribe',
    //   disableClose: true,
    //   data: (this.dialogConfig.data = {
    //     emailSubscribe: true,
    //   }),
    // });
  }
}
