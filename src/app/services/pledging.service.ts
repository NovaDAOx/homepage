  //@ts-nocheck
  import { Injectable } from '@angular/core';
  import { ethers } from "ethers";
  import { environment } from "src/environments/environment";
  import { HttpClient } from "@angular/common/http";
  import { MatSnackBar } from '@angular/material/snack-bar';
  // import { Observable } from 'rxjs/Observable'; 
  const { ABI_PLEDGE,ABI_COINJ } = require("../abi/Abi_Contract.js");
  import Web3 from "web3";
import { create } from 'domain';

  let web3 = new Web3(Web3.givenProvider);
  @Injectable({
    providedIn: 'root'
  })
  export class PledgingService {
    private web3Http = web3;

    constructor(private snack: MatSnackBar,) { }

    const PLEDGE = environment.PLEDGE
    const COIN = environment.COIN
    ABI_PLEDGE = ABI_PLEDGE
    ABI_COINJ = ABI_COINJ
    
    public async pledgeContract() {
      return new web3.eth.Contract(this.ABI_PLEDGE, this.PLEDGE);
    }

public async CoinContract()
{
  return new web3.eth.Contract(this.ABI_COINJ,this.COIN)
}
async createGrant(_projectSN:any,_reqAmount:any,_useraddress:any)
  {
    try
    {
    const amountt = this.web3Http.utils.toHex(
    this.web3Http.utils.toWei(Number(_reqAmount).toString(), 'ether'))
    console.log('dddddddddddddddddddddddddd',amountt)
    const contract = await this.pledgeContract()
    const create = await contract.methods
    .createGrant(_projectSN,amountt,_useraddress)
    .send({from:_useraddress,value:0})
    console.log(create,'000000000000')
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
  async changeWallet(SN:any,_useraddress:any)
  {
    try
    {
    const contract = await this.pledgeContract();
    const transactionAddress = localStorage.getItem('walletId')
    const change = contract.methods.changeWallet(SN,_useraddress).send({from:transactionAddress,value:0})
    return change
    }
    catch(e)
    {
      console.log(e)
  
      return null
    }
  }
async removeGrant(_SN:any,_address)
{
  try
  {
  const contract = await this.pledgeContract();
  const transactionAddress = localStorage.getItem('walletId')
  const remove = contract.methods.removeGrant(_SN).send({from:_address,value:0})
  return remove
  }
  catch(e)
  {
    console.log(e)
  
    return null
  }
}
  async sendPledge(_amount:any,_projectSN:any)
  {
    try
    {
      // const amt = await _amount.replace(/[^,.,0-9]/g, '')
      // console.log(amt,'ssssssssssssssss')
      const decimal = 18 ;
      const amountt = this.web3Http.utils.toHex(
        this.web3Http.utils.toWei(Number(_amount).toString(), 'ether'))
        console.log('dddddddddddddddddddddddddd',amountt)
      // const amount = this.web3Http.utils.toWei(Number(_amount).toFixed())
      // const hex = this.web3Http.utils.fromDecimal(_amount)
    //  const BN =  web3.utils.BN;
    //  const amt = new BN(decimal);
    //  const numberOneAsBigNumber = new BN(_amount);
    //  const numberTowAsBigNumber = new BN(2);
    //  const numberTenAsBigNumber = new BN(10);


    //  const oneCoin = numberOneAsBigNumber.mul(numberTenAsBigNumber.pow(amt));
    // console.log(oneCoin,'TTTTTTTTTTTTTTTTTTTTTTTTTTTT'); // BN { negative: 0, words: [ 1000000, <1 empty item> ], length: 1, red: null}
    // console.log(oneCoin.toString(),'SSSSSSSSSSSSSSSSSSSSS'); // 1000000
 
    // var amout = this.web3Http.utils.toWei(Number(_amount).toString(), "ether")
    // console.log('llllllllllllllllll',amout)

     const amountF =  parseInt(_amount)
    //  console.log('llllllllllllllllll',amt)
      const userAddress = localStorage.getItem('walletId')
    const contract = await this.pledgeContract()
    const CoinContract = await this.CoinContract()
    console.log('Contract contract contract',CoinContract)
    const approve = await CoinContract.methods.approve(this.PLEDGE,amountt).send({from:userAddress,value:0})
    console.log('approve',approve)
    if(approve)
    {
      const testval = parseInt(_amount)
      
    const pledge = await contract.methods.sendPledge(amountt,_projectSN).send({from:userAddress, value:0})
    console.log('----Returned Pledge-----',pledge)
    // console.log('aAAAAAAAAAAAAAAA',amount)
     
    if(pledge)
    {
    this.snack.open('Pledged Successfully', 'X', {
      duration: 10000,
      panelClass: ['success-order'],
      horizontalPosition: 'end',
    });
   
    }
    return pledge
    }
  }
    catch(e)
    {  
      console.log(e)

      return null
    }
  }

  async checkFunding(_projectSN:any)
  {
    const contract = await this.pledgeContract();
    const checkFunding = await contract.methods.checkFunding(_projectSN).call()
    console.log('this is collected amount',checkFunding)
    return checkFunding
  }

  async fundingNeeded(_projectSN:any)
  {
    const contract = await this.pledgeContract();
    const needed = await contract.methods.fundingNeeded(_projectSN).call()
    console.log('this is funding needed',needed)
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
