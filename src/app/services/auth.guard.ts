//@ts-nocheck
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MoralisService } from './moralis.service';
import { EtherService } from './ether.service';
import { ethers } from 'ethers';
const { ABI_STAKEJ, ABI_COINJ, ABI_DAOJ } = require("../abi/Abi_Contract.js");
import Web3 from "web3";

import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { __await } from 'tslib';
let web3 = new Web3(Web3.givenProvider);
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private moralisservice:MoralisService,private router:Router,
    private etherservice:EtherService,private http:HttpClient)
  {

  }
  member :boolean =null;
  memberStaked:boolean = null;
  public DAO = environment.DAO;
  public STAKE = environment.STAKE;
  ABI_DAO = ABI_DAOJ;
  ABI_STAKE = ABI_STAKEJ;
  ABI_COIN = ABI_COINJ;
  COIN = "0x0b646d450d95fa7091589e01da063fcf157c583a";
  FINNEY = environment.FINNEY;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise(( resolve, reject) => {
      const userAddres = localStorage.getItem('walletId')
      if(!userAddres)
      {

        resolve(false)
        window.alert('Please Connect Wallet To Proceed')
      }
      // if(userAddres)
      // {
      //   const STAKEcon  = new web3.eth.Contract(this.ABI_STAKE, this.STAKE);
      //   const array = []
      //     console.log('SSSSSSSSSSSSSSSSSSSSSsssss',STAKEcon)
      //     const tokensStaked =  STAKEcon.methods
      //     .getStakerWallet(userAddres)
      //     .call().then(Item =>{
      //       console.log('IIIIIIIIIIIIiiiiTTTTTTT',Item.length)
      //       if(Item.length > 0)
      //       {
      //         console.log('protected protected protected protected protected ptotected')
      //         this.memberStaked = true;
      //         array.push(Item.length)
      //           console.log('LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLaaa',this.memberStaked)
      //       }
      //     });

      //   console.log('KKKKKKKKKKKKKKKKKKKKKK',tokensStaked)
      //   const test = this.memberStaked
      //   console.log('LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLaaa',this.memberStaked)
      //   if(this.memberStaked == true)
      //   { 
      //     console.log('LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLaaa2',this.memberStaked)
      //   }
        
      // }

      this.stakedNFTCheck().then( async Item =>{
        const data = await Item
        console.log(data.length,'VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV')
       if(data.length > 0 )
       {
        this.member = true
        console.log('this address have staked NOVA NFTs',this.member)
       }
      })
      this.moralisservice.getData().subscribe((res) =>{
        // this.etherservice.stakedNFTS().subscribe(_Item =>{
        //   console.log('IIIIIIIIIIIIIIIIIIIIIIIIT',_Item)
        // })
        const dat = this.stakedNFTCheck()
        console.log(dat,'6666666666666666666666666666666666666666')
        //console.log("auth "+la)
        // this.router.navigate(['/'])
        console.log(userAddres,'AAAAAADddddddda')
        let d = res.result
        d.map(item =>{
          console.log(item.name,'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN')
          if(item.name === 'Nova Genesis Pass')
          {
            this.member = true;
            console.log('this address containes NOVA NFTs (Or Retry )')
          }
        
      })   
        // this.etherservice.stakedNFTS().then(Item => {
        //   console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRr',Item)
        // })
        const provider = new ethers.providers.Web3Provider(window.ethereum);
      
       if(this.member == true){ 
          resolve(true);
          console.log('UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUu',res)
        }else if(this.member != true){
          
        
          this.router.navigate(['/'])
          console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',res)
          window.alert('There is no NOVA$ token in this address, please procure valid wallet address Or reconnect your wallet')
          resolve(false);
        }
        
      })
    });
  }
  async stakedNFTCheck() {
    const userAddress = localStorage.getItem('walletId')
    let STAKEcon = new web3.eth.Contract(this.ABI_STAKE, this.STAKE);
    const tokensStaked = await STAKEcon.methods
    .getStakerWallet(userAddress)
    .call();
    console.log('QQQQQQQQQQQQUUUUUUUUUUUUUURRRRRRRRRR',tokensStaked)

    return tokensStaked
     
    }
}




