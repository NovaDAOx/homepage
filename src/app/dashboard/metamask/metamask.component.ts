//@ts-nocheck
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MetamaskService } from 'src/app/services/metamask.service';

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

  ngOnInit(): void {}

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
}
