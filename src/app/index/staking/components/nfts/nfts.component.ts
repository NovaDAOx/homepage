import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.scss']
})
export class NftsComponent implements OnInit {
@Input() nft:String[]
async checkAll(bx) {
  var cbs =await document.getElementsByTagName('input');
  for(var i=0; i < cbs.length; i++) {
    if(cbs[i].type == 'checkbox') {
      cbs[i].checked = bx.checked;
    }
  }
}
  constructor() { }

  ngOnInit(): void {
    const cheklist = document.getElementById('checkl')
  }

}
