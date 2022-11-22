//@ts-nocheck
import { Injectable } from '@angular/core';
import { ethers } from "ethers";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
// import { Observable } from 'rxjs/Observable'; 
const { ABI_PLEDGE } = require("../abi/Abi_Contract.js");
import Web3 from "web3";

let web3 = new Web3(Web3.givenProvider);
@Injectable({
  providedIn: 'root'
})
export class PledgingService {

  constructor() { }

  const PLEDGE = environment.PLEDGE
  ABI_PLEDGE = ABI_PLEDGE
  
  public async pledgeContract() {
    return new web3.eth.Contract(this.ABI_PLEDGE, this.PLEDGE);
  }


  async createGrant(_projectSN:any,_reqAmount:any,_useraddress:any)
{
  try
  {
  const contract = await this.pledgeContract()
  const create = await contract.methods
  .createGrant(_projectSN,_reqAmount,_useraddress)
  .send({from:_useraddress,value:0})
  console.log(create,'0000000000000000000000000000000000')
  return create
  }
  catch(e)
  {
    console.log('----Error create Grant-----',e)
    return null
  }
}

async claim(_projectSN:any)
{
  const contract = await this.pledgeContract()
  const claim = contract.methods.claimPledge(_projectSN)
  return claim
}

async sendPledge(_amount:any,_projectSN:any)
{
  try
  {
    const userAddress = localStorage.getItem('walletId')
  const contract = await this.pledgeContract()
  const pledge = contract.methods.sendPledge(_amount,_projectSN).send({from:userAddress, to:this.PLEDGE, value: _amount})
  console.log('----Returned Pledge-----',pledge)
  return pledge
  }
  catch(e)
  {
    console.log('------sending Pledge----',e)
    return null
  }
}

async checkFunding(_projectSN:any)
{
  const contract = await this.pledgeContract();
  const checkFunding = await contract.methods.checkFunding(_projectSN).call()
  return checkFunding
}

async fundingNeeded(_projectSN:any)
{
  const contract = await this.pledgeContract();
  const needed = await contract.methods.fundingNeeded(_projectSN).call()

  return needed
}
async grantSuccess(_projectSN:any)
{
  const contract = await this.pledgeContract();
  const grant = await contract.methods.grantSuccess(_projectSN).call();
  return grant
}

async viewWallet(_projectSN:any)
{
  const contract = await this.pledgeContract();
  const wallet = await contract.methods.viewWallet(_projectSN).call();
}

}
