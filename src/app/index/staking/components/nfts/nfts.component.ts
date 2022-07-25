import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.scss']
})
export class NftsComponent implements OnInit {
@Input() nft:String[]

  constructor() { }

  ngOnInit(): void {
  }

}
