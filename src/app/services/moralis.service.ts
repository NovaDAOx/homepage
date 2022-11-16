    import { Injectable } from "@angular/core";
    // import  Moralis  from "moralis";
    import { HttpClient } from '@angular/common/http';
    import { BehaviorSubject, defer, from, Observable } from "rxjs";
    import { environment } from "src/environments/environment";
  import { RepositionScrollStrategy } from "@angular/cdk/overlay";
  import {CurlyBracketParser} from "curly-bracket-parser"

 
    // import { EvmChain } from '@moralisweb3/evm-utils';

    @Injectable({
      providedIn: "root",
    })

    export class MoralisService {
      // private userBS = new BehaviorSubject<Moralis.User | undefined>(undefined);
      constructor(private http:HttpClient) {}
      // public startMoralis(): Observable<void> {
      //   return defer(() =>
      //     from(
      //       Moralis.start({
              
      //           // apiKey:'JHYdYAbDQvpHYIWsyXb5Nyswvd8Sjnj4Jx3tvJJEuRgJeYSRuMRiSfWhGtORDJQF'
      //            ...environment.moralis
              
      //       })
      //     )
      //   );
      // }
      getData():Observable<any>
      {
        const options = {
          address:localStorage.getItem('walletId'),
          method: 'GET',
          headers: { 'Accept': 'application/json', 'X-API-Key': 'JHYdYAbDQvpHYIWsyXb5Nyswvd8Sjnj4Jx3tvJJEuRgJeYSRuMRiSfWhGtORDJQF' },
        };
        const address = localStorage.getItem('walletId')
        const url = 'https://deep-index.moralis.io/api/v2/{userAddres}/nft?chain=sepolia';
        const final_url  = url.replace(/[{].*[}]/, address);
        console.log(final_url,'8888888888888888888888888888888888888888(((')
        
        return this.http.get<any>(final_url,options)   
      }

      public  async getnfts():Promise<any> {
        try {
          
          const userAddress = localStorage.getItem("walletId");
    //       console.log("userAddress", userAddress);
    //       const options = {
    //         method: 'GET',
    //         headers: { 'Accept': 'application/json', 'X-API-Key': 'JHYdYAbDQvpHYIWsyXb5Nyswvd8Sjnj4Jx3tvJJEuRgJeYSRuMRiSfWhGtORDJQF' },
    //       };
    //     var userEthNFTs = []
    //       fetch('https://deep-index.moralis.io/api/v2/0xa902C87614267a412E2F7a95E08E0f92f8106db5/nft?chain=sepolia', options)
    //   .then((response) => response.json())
    //   .then((response) => userEthNFTs.push(response))
    //   .catch((err) => console.error(err))
    // console.log(userEthNFTs,'+++++++++++++++++++++++++++_____________________')
    const userEthNFTs = []
    const dataa = []
    const useAddress = localStorage.getItem('walletId')
  this.getData().subscribe(async data => {
      console.log(data.result,'88888888888888888888888888888888')
      userEthNFTs.push(data.result)
      userEthNFTs.map(Item => {
        for (var i=0 ; i< Item.length ; i++)
        {
          
          // data.push({name:Item[i].name})
          console.log('eeeeeeeeeeeeeeeee',Item[i].name)
          if(Item[i].name === 'Nova Genesis Pass')
          {
          let name =Item[i].name
          let url= Item[i].token_uri
          let TokenId= Item[i].token_id
          let Address=Item[i].token_address
          let amount=Item[i].amount
          let length= Item.length
          dataa.push({name:name,url:url,TokenId:TokenId,Address:Address,amount:amount,length:length})
          }
        }
        
        console.log('000000000000000000',data)
      })

      console.log('000000000000000000',dataa)

    })
    
    var array = [];
          
          
          var listContacts = function () {
            console.log(userEthNFTs,'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv')
            console.log('xxxxxxxxxxxxxxxxxxx',userEthNFTs)
            // userEthNFTs.map(async Item =>
            //   {
            //     console.log('eeeeeeeeeeeeeeeeeeeeeeeee',Item)
            //   })
            // userEthNFTs.map(Ite => {
            //   console.log('1111111111111111111111',Ite)
            // })
            
            // for (var i = 0; i < userEthNFTs.length; i++) {
            //   if (userEthNFTs[i][0] == "Nova Genesis Pass ") {
              
            //     console.log('gggggggggggggggggggggggggggggggggg')
            //     const json = {
            //       name: userEthNFTs[i].name,
            //       url: userEthNFTs[i].token_uri,
            //       TokenId: userEthNFTs[i].token_id,
            //       Address: userEthNFTs[i].token_address,
            //       amount: userEthNFTs[i].amount,
            //     };
            //     array.push(json);
          //  /   }
          //   }
          };
          console.log("eden", array);
          console.log('eeeeeeeeeeeeeeeee',dataa)
          listContacts();
          return dataa;
        } catch (err) {
          console.log("err", err);
          return [];
        }
      }
      public  async getnftsLen():Promise<any> {
      var length = []
       var final_length = []
          const useAddress = localStorage.getItem('walletId')
          var lengthh = null
          this.getData().subscribe(async data => {
            length.push(data.result)
            length.map(Item => {
              final_length.push(Item.length)
              return Item.length
            })
            
              console.log(data,'88888888888888888888888888888888')

              console.log(final_length,'333333333333333333333333333333333e')
          })
        return final_length
      }
    }
