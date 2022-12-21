      import { Injectable } from "@angular/core";
      // import  Moralis  from "moralis";
      import { HttpClient } from '@angular/common/http';
      import { BehaviorSubject, defer, from, Observable } from "rxjs";
      import { environment } from "src/environments/environment";
    import { RepositionScrollStrategy } from "@angular/cdk/overlay";
    import {CurlyBracketParser} from "curly-bracket-parser"
    import { EtherService } from "./ether.service";

  
      // import { EvmChain } from '@moralisweb3/evm-utils';

      @Injectable({
        providedIn: "root",
      })

      export class MoralisService {
        // private userBS = new BehaviorSubject<Moralis.User | undefined>(undefined);
        Length =  ""
        constructor(private http:HttpClient,private etherservice:EtherService) {}
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
          const test = environment.ALLOWED_ADDRESS
          console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn()&*$%^',test[0])
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
            var dataaa =  url
            fetch(url)
.then(res => res.json())
.then(out =>
  console.log('Checkout this JSON! ', out))
.catch(err => { throw err });
            console.log('dataaa  dataaa dataa dataaa dataaa',dataaa)
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

    async  getnftsLen() {
        var length = []
        var final_length = []
            const useAddress = localStorage.getItem('walletId')
            var lengthh = null
            const datta = this.getData().subscribe( async data => {
              length.push(data.result)
              console.log(data.total,'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
              const d = data.total
              // if(data.total !=0)
              // {
                console.log('##########################$$$$$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%',d)
                
              // }
              // length.map(Item => {
              //   console.log('33333333333333%%%%%%%%5',Item)
              //   final_length.push(Item.length)
              //   this.Length = Item.length
              //   return Item.length
              // })
              
                console.log(datta,'88888888888888888888888888888888')
                console.log(this.Length,'22222222222222222222222222222222222')
                console.log(final_length,'333333333333333333333333333333333e')
              
                return  data.total
            })
            console.log(datta,'101001010101010101010101010101010110')
          return final_length
        }
      
        async protected():Promise<any>
        {
          // const data = this.getData().subscribe(async Item => {
          //   const array = []
          //   console.log('ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ',Item.result.length)
          //   for(var i = 0; i < Item.result.length ; i++)
          //   { 
              
          //     console.log('YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',Item.result[i].name)
          //     const name = Item.result[i].name
          //     console.log('QQQQQQQQQQQQQQQQQQq',name)
          //     const length = await array.length
          //     console.log('this is the new length ',length)
            
          //     if(Item.result[i].name === 'Nova Genesis Pass')
          //     {
          //       array.push(name)
          //       console.log(array.length,'OOOOOOOOOOOOOOOOOOOOOOO')
          //     //  if(array.length != 0)
          //     //  {
          //     //   const data = document.getElementsById('ProtectedDAO')
              
          //     //   console.log(data ,'data data data')
          //     //   console.log(length, 'length length length')
          //     //   console.log(array.length)
          //     //  }
                
          //     }
          //     if(length != 0)
          //     {
          //       console.log('passed')
          //     }
          //     else
          //     {
          //       console.log('bobobo length ',length)
          //     }
          //   }
          // })

          console.log('YLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL')
          return 'he'
        }

      }
