import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { parse } from 'path';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Education implements OnInit {
  element: HTMLImageElement | undefined;
  counter: number = 0;
  constructor(
    private router: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle('Education');
  }
  eth:any = null;
    eth1:any = 'show';
    eth2:any = null;
    eth3:any = null;
    eth4:any = null;
    eth5:any = null;
    eth6:any = null;
    eth7:any = null;
    eth8:any = null;
    eth9:any = null;
  nft:any = null;
    nft1:any = 'show';
    nft2:any = null;
    nft3:any = null;
    nft4:any = null;
    nft5:any = null;
    nft6:any = null;
    nft7:any = null;
    nft8:any = null;
    nft9:any = null;
    nft10:any = null;
    nft11:any = null;
    nft12:any = null;
  nftfaq:any = null;
    nftfaq1:any = 'show';
    nftfaq2:any = null;
    nftfaq3:any = null;
    nftfaq4:any = null;
    nftfaq5:any = null;
  dao:any = null;
    dao1:any = 'show';
    dao2:any = null;
    dao3:any = null;
    dao4:any = null;
    dao5:any = null;
  def:any = null;
    def1:any = 'show';
    def2:any = null;
    def3:any = null;
  wal:any = null;
    wal1:any = 'show';
    wal2:any = null;
    wal3:any = null;
    wal4:any = null;
    wal5:any = null;
  eco:any = null;
    eco1:any = 'show';
    eco2:any = null;
    eco3:any = null;
    eco4:any = null;
  gud:any = null;
    gud1:any = 'show';
    gud2:any = 'show';
    gud3:any = 'show';
    gud4:any = 'show';
    gud5:any = 'show';
  acc:any = null;
    acc1:any = 'show';
    acc2:any = 'show';
    acc3:any = 'show';
    acc4:any = 'show';
    acc5:any = 'show';
    acc6:any = 'show';
    acc7:any = 'show';
    acc8:any = 'show';
    acc9:any = 'show';
  reverse (elmnt) {
    if (elmnt) {
      return null;
    } else {
      return 'show';
    }
  }
  closeAll() {
    if (this.eth) {this.eth = null;}
    if (this.nft) {this.nft = null;}
    if (this.nftfaq) {this.nftfaq = null;}
    if (this.dao) {this.dao = null;}
    if (this.def) {this.def = null;}
    if (this.wal) {this.wal = null;}
    if (this.eco) {this.eco = null;}
    if (this.gud) {this.gud = null;}
    if (this.acc) {this.acc = null;}
  }
  async subject(sub) {
    switch (sub) {
      case 'eth': (this.eth ? 0:this.closeAll()); this.eth = this.reverse(this.eth); break;
      case 'nft': (this.nft ? 0:this.closeAll()); this.nft = this.reverse(this.nft); break;
      case 'nftfaq': (this.nftfaq ? 0:this.closeAll()); this.nftfaq = this.reverse(this.nftfaq); break;
      case 'dao': (this.dao ? 0:this.closeAll()); this.dao = this.reverse(this.dao); break;
      case 'def': (this.def ? 0:this.closeAll()); this.def = this.reverse(this.def); break;
      case 'wal': (this.wal ? 0:this.closeAll()); this.wal = this.reverse(this.wal); break;
      case 'eco': (this.eco ? 0:this.closeAll()); this.eco = this.reverse(this.eco); break;
      case 'gud': (this.gud ? 0:this.closeAll()); this.gud = this.reverse(this.gud); break;
      case 'acc': (this.acc ? 0:this.closeAll()); this.acc = this.reverse(this.acc); break;
    }
  } 
  async showAnswer(ans) {
    switch (ans) {
      case 'eth1': this.eth1 = this.reverse(this.eth1); break;
      case 'eth2': this.eth2 = this.reverse(this.eth2); break;
      case 'eth3': this.eth3 = this.reverse(this.eth3); break;
      case 'eth4': this.eth4 = this.reverse(this.eth4); break;
      case 'eth5': this.eth5 = this.reverse(this.eth5); break;
      case 'eth6': this.eth6 = this.reverse(this.eth6); break;
      case 'eth7': this.eth7 = this.reverse(this.eth7); break;
      case 'eth8': this.eth8 = this.reverse(this.eth8); break;
      case 'eth9': this.eth9 = this.reverse(this.eth9); break;
      case 'nft1': this.nft1 = this.reverse(this.nft1); break;
      case 'nft2': this.nft2 = this.reverse(this.nft2); break;
      case 'nft3': this.nft3 = this.reverse(this.nft3); break;
      case 'nft4': this.nft4 = this.reverse(this.nft4); break;
      case 'nft5': this.nft5 = this.reverse(this.nft5); break;
      case 'nft6': this.nft6 = this.reverse(this.nft6); break;
      case 'nft7': this.nft7 = this.reverse(this.nft7); break;
      case 'nft8': this.nft8 = this.reverse(this.nft8); break;
      case 'nft9': this.nft9 = this.reverse(this.nft9); break;
      case 'nft10': this.nft10 = this.reverse(this.nft10); break;
      case 'nft11': this.nft11 = this.reverse(this.nft11); break;
      case 'nft12': this.nft12 = this.reverse(this.nft12); break;
      case 'nftfaq1': this.nftfaq1 = this.reverse(this.nftfaq1); break;
      case 'nftfaq2': this.nftfaq2 = this.reverse(this.nftfaq2); break;
      case 'nftfaq3': this.nftfaq3 = this.reverse(this.nftfaq3); break;
      case 'nftfaq4': this.nftfaq4 = this.reverse(this.nftfaq4); break;
      case 'nftfaq5': this.nftfaq5 = this.reverse(this.nftfaq5); break;
      case 'dao1': this.dao1 = this.reverse(this.dao1); break;
      case 'dao2': this.dao2 = this.reverse(this.dao2); break;
      case 'dao3': this.dao3 = this.reverse(this.dao3); break;
      case 'dao4': this.dao4 = this.reverse(this.dao4); break;
      case 'dao5': this.dao5 = this.reverse(this.dao5); break;
      case 'def1': this.def1 = this.reverse(this.def1); break;
      case 'def2': this.def2 = this.reverse(this.def2); break;
      case 'def3': this.def3 = this.reverse(this.def3); break;
      case 'wal1': this.wal1 = this.reverse(this.wal1); break;
      case 'wal2': this.wal2 = this.reverse(this.wal2); break;
      case 'wal3': this.wal3 = this.reverse(this.wal3); break;
      case 'wal4': this.wal4 = this.reverse(this.wal4); break;
      case 'wal5': this.wal5 = this.reverse(this.wal5); break;
      case 'eco1': this.eco1 = this.reverse(this.eco1); break;
      case 'eco2': this.eco2 = this.reverse(this.eco2); break;
      case 'eco3': this.eco3 = this.reverse(this.eco3); break;
      case 'eco4': this.eco4 = this.reverse(this.eco4); break;
      case 'gud1': this.gud1 = this.reverse(this.gud1); break;
      case 'gud2': this.gud2 = this.reverse(this.gud2); break;
      case 'gud3': this.gud3 = this.reverse(this.gud3); break;
      case 'gud4': this.gud4 = this.reverse(this.gud4); break;
      case 'gud5': this.gud5 = this.reverse(this.gud5); break;
      case 'acc1': this.acc1 = this.reverse(this.acc1); break;
      case 'acc2': this.acc2 = this.reverse(this.acc2); break;
      case 'acc3': this.acc3 = this.reverse(this.acc3); break;
      case 'acc4': this.acc4 = this.reverse(this.acc4); break;
      case 'acc5': this.acc5 = this.reverse(this.acc5); break;
      case 'acc6': this.acc6 = this.reverse(this.acc6); break;
      case 'acc7': this.acc7 = this.reverse(this.acc7); break;
      case 'acc8': this.acc8 = this.reverse(this.acc8); break;
      case 'acc9': this.acc9 = this.reverse(this.acc9); break;
    }
  }
  scroll() {
    let hash = window.location.hash;
    if (hash != '#/education') {
      switch (hash) {
        case '#/education#ethereum': document.getElementById("ethereum").scrollIntoView({ behavior: "smooth", block: "start",inline: "nearest",}); break;
        case '#/education#nfts': document.getElementById("nfts").scrollIntoView({ behavior: "smooth", block: "start",inline: "nearest",}); break;
        case '#/education#nft_faq': document.getElementById("nft_faq").scrollIntoView({ behavior: "smooth", block: "start",inline: "nearest",}); break;
        case '#/education#daos': document.getElementById("daos").scrollIntoView({ behavior: "smooth", block: "start",inline: "nearest",}); break;
        case '#/education#defi': document.getElementById("defi").scrollIntoView({ behavior: "smooth", block: "start",inline: "nearest",}); break;
        case '#/education#digital_wallets': document.getElementById("digital_wallets").scrollIntoView({ behavior: "smooth", block: "start",inline: "nearest",}); break;
        case '#/education#ecosystem_terms': document.getElementById("ecosystem_terms").scrollIntoView({ behavior: "smooth", block: "start",inline: "nearest",}); break;
        case '#/education#guides': document.getElementById("guides").scrollIntoView({ behavior: "smooth", block: "start",inline: "nearest",}); break;
        case '#/education#acronyms': document.getElementById("acronyms").scrollIntoView({ behavior: "smooth", block: "start",inline: "nearest",}); break;
      }
    }
  }
  show() {
    let hash = window.location.hash;
    if (hash != '#/education') {
      switch (hash) {
        case '#/education#ethereum': this.eth = 'show'; break;
        case '#/education#nfts': this.nft = 'show'; break;
        case '#/education#nft_faq': this.nftfaq = 'show'; break;
        case '#/education#daos': this.dao = 'show'; break;
        case '#/education#defi': this.def = 'show'; break;
        case '#/education#digital_wallets': this.wal = 'show'; break;
        case '#/education#ecosystem_terms': this.eco = 'show'; break;
        case '#/education#guides': this.gud = 'show'; break;
        case '#/education#acronyms': this.acc = 'show'; break;
      }
    }
  }
  iframe() {
    document.getElementById('ifraContainer').style.display = 'block';
  }
  ngOnInit(): void {
    setTimeout(()=>{                          
        this.scroll();
    }, 2000)
    setTimeout(()=>{                          
        this.show();
    }, 1000)
    setTimeout(()=>{                          
        this.iframe();
    }, 5000)
  }
}
