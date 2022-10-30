import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MetamaskComponent } from 'src/app/dashboard/metamask/metamask.component';
import { MetamaskService } from 'src/app/services/metamask.service';
import { NftService } from 'src/app/services/nft.service';
import { Web3Service } from 'src/app/services/web3.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mint',
  templateUrl: './mint.component.html',
  styleUrls: ['./mint.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MintComponent implements OnInit {
  clientUrl = environment.clientUrl;
  element: HTMLImageElement | undefined;
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

  images = [
    '../../../assets/Images/mint_images_folder/1.png',
    '../../../assets/Images/mint_images_folder/2.png',
    '../../../assets/Images/mint_images_folder/3.png',
    '../../../assets/Images/mint_images_folder/4.png',
    '../../../assets/Images/mint_images_folder/5.png',
    '../../../assets/Images/mint_images_folder/6.png',
    '../../../assets/Images/mint_images_folder/7.png',
    '../../../assets/Images/mint_images_folder/8.png',
    '../../../assets/Images/mint_images_folder/9.png',
    '../../../assets/Images/mint_images_folder/10.png',
    '../../../assets/Images/mint_images_folder/11.png',
    '../../../assets/Images/mint_images_folder/12.png',
    '../../../assets/Images/mint_images_folder/13.png',
    '../../../assets/Images/mint_images_folder/14.png',
    '../../../assets/Images/mint_images_folder/15.png',
    '../../../assets/Images/mint_images_folder/16.png',
    '../../../assets/Images/mint_images_folder/17.png',
    '../../../assets/Images/mint_images_folder/18.png',
    '../../../assets/Images/mint_images_folder/19.png',
    '../../../assets/Images/mint_images_folder/20.png',
    '../../../assets/Images/mint_images_folder/21.png',
    '../../../assets/Images/mint_images_folder/22.png',
    '../../../assets/Images/mint_images_folder/23.png',
    '../../../assets/Images/mint_images_folder/24.png',
  ];
  indx = 0;
  allDivs: any = [];
  lastIndex = null;
  lastDivIndex = null;
  imgaePool = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  nftQuantity = 1;
  allowedAddress = environment.ALLOWED_ADDRESS;
  nftDefaultPrice = 0.1;
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
    this.titleService.setTitle('Minting');
  }

  ngOnInit(): void {
    this.gotoTop();
    // this.allDivs = document.getElementsByClassName('mint_imgs');
    // setInterval(() => {
    //   this.setBG();
    // }, 10000);

    this.getCounter();
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
    //this.checkStatus(userAddress);
  }

  checkStatus(userAddress: any) {
    this.nftService.getMintDetails(userAddress).subscribe((data) => {
      this.pendingNFT = data;
    });
  }
  changeScrollbar() {
    this.router.navigate(['/home'], { state: { routedFrom: 'mint' } });
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
        routing: '/mint',
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

  async newMintNFT() {
    this.spinner.show();
    const userAddress = localStorage.getItem('walletId');
    if (userAddress) {
      console.log('userAddress',userAddress.toLowerCase())
      const userTotalNFT = await this.web3Service.getMintedNFT();
      const overallQty = Number(userTotalNFT) + Number(this.nftQuantity);
      console.log(this.allowedAddress.indexOf(userAddress))
      const limit = (this.allowedAddress.indexOf(userAddress.toLowerCase())!=-1) ? 7499 : 5;
      console.log('limit',limit)
      if (overallQty <= limit) {
        const tx = await this.web3Service.mintNFT(this.nftQuantity);
        if (tx) {
          const logsresult = await this.web3Service.getTransactionResults(tx);
          //console.log('logsresult', logsresult);
          this.snack.open('NFT has been minted sucessfully', 'X', {
            duration: 10000,
            panelClass: ['success-order'],
            horizontalPosition: 'end',
          });
          this.spinner.hide();
          this.getCounter();
        } else {
          this.spinner.hide();
          //this.checkStatus(userAddress);
          this.snack.open('Transaction has been cancelled or failed', 'X', {
            duration: 10000,
            panelClass: ['error-snackbar'],
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      } else {
        this.spinner.hide();
        //this.checkStatus(userAddress);
        this.snack.open(
          'You can not mint more then 5 NFT, You already minted ' +
            userTotalNFT + 'NFT.',
          'X',
          {
            duration: 10000,
            panelClass: ['error-snackbar'],
            horizontalPosition: 'end',
          }
        );
      }
    } else {
      this.spinner.hide();
      this.snack.open('Please connect metamask manually', 'X', {
        duration: 10000,
        panelClass: ['error-snackbar'],
        horizontalPosition: 'end',
      });
    }
  }

  async getCounter() {
    this.counter = await this.web3Service.getTotalMintedNFT();
    //console.log('totalNFT', this.counter);
  }

  async setBG() {
    const randomeDivIndex = Number(
      this.getRandomImg(this.allDivs.length).toFixed(0)
    );
    const randomeImgIndex = Number(
      this.getRandomImg(this.images.length - 1).toFixed(0)
    );
    const randomeDiv = this.allDivs[randomeDivIndex];

    // for (let i = 0; i < this.allDivs.length; i++) {
    //   this.allDivs[i].classList.remove('custom-fadein');
    // }

    if (randomeDiv == undefined) {
      //console.log('recall')
      this.setBG();
      return;
    }

    const imgPath = randomeDiv.src;

    const filenameFull = imgPath.replace(/^.*[\\\/]/, '');
    const fileName = Number(filenameFull.split('.')[0]);

    const newFile = this.images[randomeImgIndex];

    const newfilenameFull = newFile.replace(/^.*[\\\/]/, '');
    const newfileName = Number(newfilenameFull.split('.')[0]);
    //console.log('imgaePool', this.imgaePool);

    //console.log('fileName', fileName, 'newfileName', newfileName);

    //console.log('imageIndex', this.imgaePool.indexOf(newfileName));
    if (this.imgaePool.indexOf(newfileName) !== -1) {
      //console.log('recall--1')
      this.setBG();
      return;
    }

    if (this.indx >= this.images.length) {
      this.indx = 0;
    }

    if (
      (!this.lastIndex || this.lastIndex !== randomeImgIndex) &&
      (!this.lastDivIndex || this.lastDivIndex !== randomeDivIndex)
    ) {
      randomeDiv.classList.remove('custom-fadein');
      randomeDiv.classList.remove('ceffect');
      randomeDiv.classList.add('ceffect');
      this.lastIndex = randomeImgIndex;
      await this.delay(1000);

      randomeDiv.src = this.images[randomeImgIndex];
      let imgLoadflag = randomeDiv.complete && randomeDiv.naturalHeight !== 0;
      //console.log('imgLoadflag', imgLoadflag);
      if (!imgLoadflag) {
        randomeDiv.classList.add('pausedAnimation');
        await this.delay(1000);
        imgLoadflag = randomeDiv.complete && randomeDiv.naturalHeight !== 0;
      }
      //console.log('imgLoadflag-1', imgLoadflag);

      if (!imgLoadflag) {
        await this.delay(1000);
        imgLoadflag = randomeDiv.complete && randomeDiv.naturalHeight !== 0;
      }
      //console.log('imgLoadflag-2', imgLoadflag);

      if (!imgLoadflag) {
        await this.delay(1000);
        imgLoadflag = randomeDiv.complete && randomeDiv.naturalHeight !== 0;
      }
      //console.log('imgLoadflag-3', imgLoadflag);
      if (imgLoadflag) {
        randomeDiv.classList.remove('ceffect');
        randomeDiv.classList.remove('pausedAnimation');
        randomeDiv.classList.add('custom-fadein');
        this.imgaePool.push(newfileName);
        const fileIndex = this.imgaePool.indexOf(fileName);
        this.imgaePool.splice(fileIndex, 1);
      }
    }
  }

  async delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  getRandomDiv(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  getRandomImg(max) {
    return Math.random() * max;
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  increaseQty() {
    if (this.nftQuantity < 5) {
      this.nftQuantity = Number(this.nftQuantity) + 1;
      this.nftDefaultPrice = Number((this.nftQuantity * 0.1).toFixed(1));
    }
  }

  decreaseQty() {
    if (this.nftQuantity > 1) {
      this.nftQuantity = Number(this.nftQuantity) - 1;
      this.nftDefaultPrice = Number((this.nftQuantity * 0.1).toFixed(1));
    }
  }
}
