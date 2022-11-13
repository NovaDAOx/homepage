//@ts-nocheck
import { Injectable } from "@angular/core";
import { ethers } from "ethers";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
const { ABI_STAKEJ, ABI_COINJ, ABI_DAOJ } = require("../abi/Abi_Contract.js");
import Web3 from "web3";
import { MoralisService } from "./moralis.service";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
let web3 = new Web3(Web3.givenProvider);

@Injectable({
  providedIn: "root",
})
export class EtherService {
  public DAO = environment.DAO;
  public STAKE = environment.STAKE;
  ABI_DAO = ABI_DAOJ;
  ABI_STAKE = ABI_STAKEJ;
  ABI_COIN = ABI_COINJ;
  COIN = "0x0b646d450d95fa7091589e01da063fcf157c583a";
  FINNEY = environment.FINNEY;

  wallet = [];
  web3 = "";
  rewards = 0;
  tokensStaked = [];
  ArrayofStakedtkn = [];
  userAddress = localStorage.getItem("walletId");
  constructor(
    private http: HttpClient,
    private moralisservice: MoralisService
  ) {}

  public async stakeContract() {
    return new web3.eth.Contract(this.ABI_STAKE, this.STAKE);
  }

  async checkapproval() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const data = await provider.send("eth_requestAccounts", []);

    let NOVAcon = new web3.eth.Contract(this.ABI_DAO, this.DAO);
    let check = await NOVAcon.methods
      .isApprovedForAll(data[0], this.STAKE)
      .call();
    return check;
  }
  tested()
  {
    let NOVAcon = new web3.eth.Contract(this.ABI_DAO, this.DAO);
    console.log("this is a contract to fetch the nft", NOVAcon);
    return NOVAcon
  }

  public async setApproval(): Promise<any> {
    const userAddress = localStorage.getItem("walletId");

    if (window && window.ethereum && window.ethereum.isMetaMask) {
      if (userAddress) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const data = await provider.send("eth_requestAccounts", []);

        let NOVAcon = new web3.eth.Contract(this.ABI_DAO, this.DAO);
        console.log("this is a contract to fetch the nft", NOVAcon);
        let set = await NOVAcon.methods
          .setApprovalForAll(this.STAKE, true)
          .send({ from: data[0], value: 0 });

        const getsigner = provider.getSigner();

        if (set.status == true) {
          return set;
        }
      }
    }
  }

  async refreshData() {
    this.estimateClaim();
    const userAddress = localStorage.getItem("walletId");
    if (userAddress) {
      let STAKEcon = new web3.eth.Contract(this.ABI_STAKE, this.STAKE);
      let cycle = await STAKEcon.methods.cycleStart().call();
      console.log("this is cycle start", cycle);

      let COINcon = new web3.eth.Contract(this.ABI_COIN, this.COIN);
      console.log("this is coin contract", COINcon);
      document.getElementById("rewards").textContent = "Loading...";
      const staked = document.getElementById("staked");
      staked.textContent = "Loading...";
      const rewards = await STAKEcon.methods.estimateClaim(userAddress).call();
      console.log("rewards", rewards);
      const Totalrewards = rewards / this.FINNEY; // Must account for 18 decimals
      console.log(Totalrewards);
      const tokensStaked = await STAKEcon.methods
        .getStakerWallet(userAddress)
        .call();
      this.ArrayofStakedtkn = tokensStaked;
      const holdTime = await STAKEcon.methods.holdTime().call();
      console.log("this is hold time", holdTime);
      console.log("tokenStaked", tokensStaked);
      console.log("staked token length", tokensStaked.length);
      document.getElementById("rewards").textContent = Totalrewards.toFixed(2);
      document.getElementById("staked").textContent = tokensStaked.length;
      console.log("staked token length", tokensStaked.length);
      let NOVAcon = new web3.eth.Contract(this.ABI_DAO, this.DAO);
      console.log("this is NOVAcon", NOVAcon);
      const name = await NOVAcon.methods.name().call();
      console.log("this is name ", name);
      return tokensStaked;
    }
  }
  async stakedNFTS() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const data = await provider.send("eth_requestAccounts", []);
    const url = [];
    const array = this.ArrayofStakedtkn;
    console.log("fjal;dskjfadjslkf", this.ArrayofStakedtkn);
    console.log("xxxxxxxxxxxxxxxx", array.length);
    let NOVAcon = new web3.eth.Contract(this.ABI_DAO, this.DAO);
    const name = await NOVAcon.methods.name().call();

    for (var i = 0; i < array.length; i++) {
      let tokenURL = await NOVAcon.methods.tokenURI(i).call();
      let tokenID = this.ArrayofStakedtkn[i];
      console.log("tokenID", tokenID);
      console.log("token", tokenURL);
      const json = { tokenURL, name, tokenID };
      console.log(json);
      url.push(json);
    }
    return url;
  }

  async stakeMany(userAddress: string, tokenIds: any[]) {
    try {
      const contract = await this.stakeContract();
      const txn = await contract.methods
        .stakeMany(tokenIds)
        .send({ from: userAddress, value: 0 });
      return txn;
    } catch (e) {
      console.log("stakeMany---e--", e.message);
      return null;
    }
  }

  async unstakeAll(userAddress: string) {
    try {
      const contract = await this.stakeContract();
      const txn = await contract.methods
        .unstakeAll()
        .send({ from: userAddress, value: 0 });
      return txn;
    } catch (e) {
      console.log("unstakeAll---e--", e.message);
      return null;
    }
  }

  async unstake(userAddress: string, tokenid: string) {
    try {
      const contract = await this.stakeContract();
      const txn = await contract.methods
        .unstakePass(tokenid)
        .send({ from: userAddress, value: 0 });
      return txn;
    } catch (e) {
      console.log("unstake---e--", e.message);
      return null;
    }
  }

  async estimateClaim() {
    try {
      const userAddress = localStorage.getItem("walletId");
      if (userAddress) {
        const contract = await this.stakeContract();
        const claimAmt = await contract.methods
          .estimateClaim(userAddress)
          .call();
        return claimAmt;
      } else {
        return 0;
      }
    } catch (e) {
      console.log("estimateClaim---e--", e.message);
      return 0;
    }
  }

  async claim(userAddress: string) {
    try {
      const contract = await this.stakeContract();
      const txn = await contract.methods
        .claim()
        .send({ from: userAddress, value: 0 });
      return txn;
    } catch (e) {
      console.log("claim---e--", e.message);
      return null;
    }
  }
}
