import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-staked-nfts',
  templateUrl: './staked-nfts.component.html',
  styleUrls: ['./staked-nfts.component.scss']
})

export class StakedNFTSComponent implements OnInit {
  @Input() STAKEDnft:String[]
  @Input() callbackFunction: (args: any) => void;
  
  constructor() { }

  ngOnInit(): void {
  }

}
