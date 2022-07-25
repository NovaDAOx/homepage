    //@ts-nocheck
    import { Injectable } from '@angular/core';
    import {ethers} from 'ethers'
    import { environment } from 'src/environments/environment';
    import { HttpClient } from '@angular/common/http';
    const { NFTAbi3 } = require('../abi/ZAbi.js');
    const { NFTAbi } = require('../abi/nft.js');
  

    


    @Injectable({
      providedIn: 'root'
    })
    export class EtherService {
      
      public contractAddress = environment.NFTContractAddress3;
      


      constructor(private http:HttpClient) { }
      public async interact(): Promise<any> {
        if (window && window.ethereum && window.ethereum.isMetaMask) {
        const userAddress = localStorage.getItem('walletId');
        const provider = new ethers.providers.Web3Provider(window.ethereum)
      const data = await provider.send("eth_requestAccounts", []);
        const getsigner = provider.getSigner()
        
        const Contract = new ethers.Contract(this.contractAddress,NFTAbi3,getsigner);
         const nftContract = await Contract.functions.setNFTcontract(data[0])
         
         
         
        // const nftContract = Contract.functions.setNFTcontract(userAddress);
        // const nft2d = Contract.functions.name

        console.log('Contract',Contract)
        
        console.log('NFTContract',nftContract)

        // console.log('ccccccccccccccccccccccccccccccccccc',nft2d)
    
        
        
        const balance = await provider.getBalance(data[0])
                

        return getsigner
      
    }
  }
  
    }
    