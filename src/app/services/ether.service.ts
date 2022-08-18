      //@ts-nocheck
      import { Injectable } from '@angular/core';
      import {ethers} from 'ethers'
      import { environment } from 'src/environments/environment';
      import { HttpClient } from '@angular/common/http';
      const { ABI_STAKEJ,ABI_COINJ,ABI_DAOJ } = require('../abi/Abi_Contract.js'); 
      import Web3 from 'web3';
      import { MoralisService } from './moralis.service';
      import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
      let web3 = new Web3(Web3.givenProvider);
      import { MatSnackBar } from '@angular/material/snack-bar';
import { StakeComponent } from '../index/staking/stake.component';
    

    

      


      @Injectable({
        providedIn: 'root'
      })
      export class EtherService {
        
        public const DAO = environment.DAO;
        public const  STAKE = environment.STAKE; 
        const ABI_DAO		= ABI_DAOJ
      const ABI_STAKE		= ABI_STAKEJ 
      const ABI_COIN		= ABI_COINJ
      const COIN			= '0x3302aa35C232d53dAE8B83beC9b405B2166c6463';
      const FINNEY 		=environment.FINNEY;


      wallet = [];
      web3 = '';
      rewards = 0;
      tokensStaked = [];
      ArrayofStakedtkn =[];
      const userAddress  = localStorage.getItem('walletId')
        constructor(private http:HttpClient, private moralisservice:MoralisService, private snack: MatSnackBar) { }
        async checkapproval()
        {
          const provider = new ethers.providers.Web3Provider(window.ethereum)
          const data = await provider.send("eth_requestAccounts", []);
          
    
          let NOVAcon = new web3.eth.Contract(this.ABI_DAO, this.DAO);
          let check = await NOVAcon.methods.isApprovedForAll(data[0],this.STAKE).call()
          return check
        }

        public async setApproval(): Promise<any> {
          const userAddress = localStorage.getItem('walletId');
      
            if (window && window.ethereum && window.ethereum.isMetaMask) {
          if(userAddress)
          {
            
                  const provider = new ethers.providers.Web3Provider(window.ethereum)
                  const data = await provider.send("eth_requestAccounts", []);
                  
            
                  let NOVAcon = new web3.eth.Contract(this.ABI_DAO, this.DAO);
                  console.log('this is a contract to fetch the nft',NOVAcon)
                  let set =await NOVAcon.methods.setApprovalForAll(this.STAKE,true).send({from : data[0],value:0});
                  
              const getsigner = provider.getSigner()
            
              if(set.status == true)
              {
                  return set
                }
          }
        }
          
        }
        async stakeMany(tokenids) {
          console.log('token ids mamamamam',tokenids)
          const userAddress = localStorage.getItem('walletId');
          if (window && window.ethereum && window.ethereum.isMetaMask) {

          if (userAddress) {
            
            const token = []
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const wallet = await provider.send("eth_requestAccounts", []);
            let STAKEcon = new web3.eth.Contract(this.ABI_STAKE, this.STAKE);   
            try
            {
            let data = await STAKEcon.methods.stakeMany(tokenids).send({from : wallet,value:0});   
            console.log('this is stake con dave STAKEcon',STAKEcon)
            
            return STAKEcon
            }
            catch(e)
            {
              this.snack.open("failed.", "X", {
            
                panelClass: ["error-snackbar"],
                horizontalPosition: "end",
              });
  
            }
          } else {
          console.log('not staked')
          }
        }          
        
        }
        async estimateClaim()
        {
          const userAddress = localStorage.getItem('walletId')
          if (userAddress)
          {
          let STAKEcon = new web3.eth.Contract(this.ABI_STAKE, this.STAKE);  
          const estimateClaim = await STAKEcon.methods.estimateClaim(userAddress).call()
          console.log('estimated claim ',estimateClaim)
          return estimateClaim
          }

        }
        async claim()
        {
          const userAddress = localStorage.getItem('walletId')
          if (userAddress)
          {
          let STAKEcon = new web3.eth.Contract(this.ABI_STAKE, this.STAKE);  
          const estimateClaim = await STAKEcon.methods.estimateClaim(userAddress).call()
          console.log('estimated claim ',estimateClaim)
          
          
          const claim = await STAKEcon.methods.claim().send({from:userAddress,value:0})
          console.log('$$$$$$$$$$$$$$claim $$$$$',claim)
          return claim
          }
          else
          {}
        }
        async refreshData()
        {
          
          const userAddress = localStorage.getItem('walletId')
          if (userAddress) {
            let STAKEcon = new web3.eth.Contract(this.ABI_STAKE, this.STAKE);
                        document.getElementById('rewards').textContent = "Loading...";
            const staked = document.getElementById('staked')
            staked.textContent='Loading...';
            try
            {
            const rewards = await STAKEcon.methods.estimateClaim( userAddress ).call();
            console.log('rewards',rewards)
          const Totalrewards = rewards / this.FINNEY; // Must account for 18 decimals
          console.log(Totalrewards)
          const tokensStaked = await STAKEcon.methods.getStakerWallet( userAddress ).call();
          this.ArrayofStakedtkn = tokensStaked
          const holdTime = await STAKEcon.methods.holdTime().call();
          console.log('this is hold time',holdTime)
          console.log('tokenStaked',tokensStaked)
          console.log('staked token length',tokensStaked.length)
          document.getElementById('rewards').textContent = Totalrewards.toFixed(2);
          document.getElementById('staked').textContent = tokensStaked.length;
          console.log('staked token length',tokensStaked.length)
          let NOVAcon = new web3.eth.Contract(this.ABI_DAO, this.DAO);
          console.log('this is NOVAcon',NOVAcon)
            const name =await NOVAcon.methods.name().call()
            console.log('this is name ',name)
          return tokensStaked
        
        }
        catch(e)
        {
          console.log(e.message)
        }
        }

        }
        async stakedNFTS()
        {
          const provider = new ethers.providers.Web3Provider(window.ethereum)
          const data = await provider.send("eth_requestAccounts", []);
          const url = []
          const array = this.ArrayofStakedtkn
          console.log('fjal;dskjfadjslkf',this.ArrayofStakedtkn)
          console.log('xxxxxxxxxxxxxxxx',array.length)
          let NOVAcon = new web3.eth.Contract(this.ABI_DAO, this.DAO);
          const name =await NOVAcon.methods.name().call()
        
        for (var i =0; i<array.length; i++)
        {
            let tokenURL =await NOVAcon.methods.tokenURI(i).call();
            let tokenID = this.ArrayofStakedtkn[i]
            console.log('tokenID',tokenID)
            console.log('token',tokenURL)
            const json = {tokenURL ,name,tokenID}
            console.log(json)
            url.push(json)
          
        }
        return url
        }
        async unstakeAll() {
          const userAddress = localStorage.getItem('walletId')
          if(userAddress)
          {
            // let STAKEcon = new web3.eth.Contract(this.ABI_STAKE, this.STAKE);
            let UNSTAKEcon = new web3.eth.Contract(this.ABI_STAKE, this.STAKE);
            try{

            const unstake =await UNSTAKEcon.methods.unstakeAll().send({from:userAddress,value:0})
            return unstake
                }
          catch(e)
          {
            
            this.snack.open("failed. Not unstakable yet", "X", {
            
              panelClass: ["error-snackbar"],
              horizontalPosition: "end",
            });

          }
           
            
          }
        }

        async unstake(tokenids) {
          const userAddress = localStorage.getItem('walletId')
          
          if(userAddress)
          {
            // let STAKEcon = new web3.eth.Contract(this.ABI_STAKE, this.STAKE);
            let UNSTAKEcon = new web3.eth.Contract(this.ABI_STAKE, this.STAKE);
            try
            {
            let data = await UNSTAKEcon.methods.unstakePass(tokenids).send({from:userAddress,value:0})
            return data
            }
            catch(e)
            {
              console.log('nnnnnnnn',e.message)
              this.snack.open("failed. Not unstakable yet", "X", {
              
                panelClass: ["error-snackbar"],
                horizontalPosition: "end",
              });
            } 
          }
            
          }
        }
      
      