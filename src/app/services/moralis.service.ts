import { Injectable } from "@angular/core";
import { Moralis } from "moralis";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, defer, from, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class MoralisService {
  private userBS = new BehaviorSubject<Moralis.User | undefined>(undefined);

  constructor() {}

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
  public async getnfts() {
    try {
      const userAddress = localStorage.getItem("walletId");
      console.log("userAddress", userAddress);

      const userEthNFTs = await Moralis.Web3.getNFTs({
        chain: "rinkeby",
        address: userAddress,
      });

      var array = [];
      var listContacts = function () {
        for (var i = 0; i < userEthNFTs.length; i++) {
          if (userEthNFTs[i].name == "Nova Test Pass") {
            const json = {
              name: userEthNFTs[i].name,
              url: userEthNFTs[i].token_uri,
              TokenId: userEthNFTs[i].token_id,
              Address: userEthNFTs[i].token_address,
              amount: userEthNFTs[i].amount,
            };
            array.push(json);
          }
        }
      };

      console.log("eden", array);

      listContacts();

      return array;
    } catch (err) {
      console.log("err", err);
      return [];
    }
  }
}
