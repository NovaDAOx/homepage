  import { Injectable } from '@angular/core';
  import {Moralis} from 'moralis';
  import { HttpClient } from '@angular/common/http';
  import { BehaviorSubject, defer, from, Observable } from 'rxjs';
  import { environment } from 'src/environments/environment';


  @Injectable({
    providedIn: 'root'
  })
  export class MoralisService {
    private userBS = new BehaviorSubject<Moralis.User | undefined>(undefined);

    constructor() { }

    public startMoralis(): Observable<void> {
      return defer(() =>
        from(
          Moralis.start({
            ...environment.moralis,
          })
        )
      );
    }
    
    public observeUser(): Observable<Moralis.User | undefined> {
      return this.userBS.asObservable();
    }
    public async getnfts()
    {
      const userAddress = localStorage.getItem('walletId');
      console.log('userAddress',userAddress)
   
      const userEthNFTs = await Moralis.Web3.getNFTs({chain:'rinkeby', address:userAddress});
      // const balances = await Moralis.Web3.getAllERC20();
      console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',userEthNFTs)
        // userEthNFTs.forEach(function(nft)  {
          // let contract = nft.contract_type
        //   var array = []
        //   for(const i in userEthNFTs){
        //     array.push(i.contract_type);
        //     console.log('contract-type',array)
        //  }
        var array = []
        // for (let i of userEthNFTs)
        // {
            
            
          //   console.log(i['name'])
          //  if(i['name']=== 'toadx' || i['name'] == 'toadx')
          //  {
            var listContacts = function () {
              for (var i = 0; i < userEthNFTs.length; i++) {
                if(userEthNFTs[i].name == 'toadx')
                {

                  const json = {name:userEthNFTs[i].name , url:userEthNFTs[i].token_uri , Address:userEthNFTs[i].token_address , amount:userEthNFTs[i].amount}
                  // console.log('json',json)
                  // console.log('dew',userEthNFTs[i].name + userEthNFTs[i].token_uri);
                  array.push(json)
                } 
              }
              // function setID(item, index) {
              //   var fullname = "name: " + item + "url:" + item;
              //   return fullname;
              // }
              
              // var output = array.map(setID);
              // const json = {name:userEthNFTs[i].name,url:userEthNFTs[i].token_uri}
            
              // console.log('output',output);
          }
          
          console.log('eden',array)

          listContacts()        
      
          
          
      
          return array 
        }
    
    

  }
