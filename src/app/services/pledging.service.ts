  //@ts-nocheck
  import { Injectable } from '@angular/core';
  import { ethers } from "ethers";
  import { environment } from "src/environments/environment";
  import { HttpClient } from "@angular/common/http";
  import { MatSnackBar } from '@angular/material/snack-bar';
  // import { Observable } from 'rxjs/Observable'; 
  const { ABI_PLEDGE,ABI_COINJ,ABI_DAOJ  } = require("../abi/Abi_Contract.js");
  import Web3 from "web3";
import { create } from 'domain';

  let web3 = new Web3(Web3.givenProvider);
  @Injectable({
    providedIn: 'root'
  })
  export class PledgingService {
    private web3Http = web3;

    constructor(private snack: MatSnackBar,) { }
    ABI_DAO = ABI_DAOJ;
    public DAO = environment.DAO;
    const PLEDGE = environment.PLEDGE
    const COIN = environment.COIN
    ABI_PLEDGE = ABI_PLEDGE
    ABI_COINJ = ABI_COINJ
    checkingaprv:boolean = null;
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
    const address = localStorage.getItem('walletId')
    const contract = await this.pledgeContract()
    const create = await contract.methods
    .createGrant(_projectSN,amountt,_useraddress)
    .send({from:address,value:0})
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
  async checkapproval()
  {

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
      const userAddress = localStorage.getItem('walletId')
      // const amt = await _amount.replace(/[^,.,0-9]/g, '')
      // console.log(amt,'ssssssssssssssss')


      const decimal = 18 ;
      const amountt = this.web3Http.utils.toHex(
        this.web3Http.utils.toWei(Number(_amount).toString(), 'ether'))
        console.log('dddddddddddddddddddddddddd',amountt)
        const amo = this.web3Http.utils.toHex(
          this.web3Http.utils.toWei(Number(_amount).toFixed(18), 'ether'))
          console.log('ccccccccccccccc',_amount)
     const amountF =  _amount * 1000000000000000000
     console.log('llllllllllllllllll',amountF)
    const contract = await this.pledgeContract()
    const CoinContract = await this.CoinContract()
    const cheche = await CoinContract.methods.allowance(userAddress,this.PLEDGE).call()
    console.log('ammmmmmmmmmmmmmmmmttttttttttttt',amountt)
    // const approve = await CoinContract.methods.approve(this.PLEDGE,amountt).call({from:userAddress, value:0})
    // console.log('test test test app app app ',approve)
    let NOVAcon = new web3.eth.Contract(this.ABI_DAO, this.DAO);
    let checkApprove = await NOVAcon.methods
      .isApprovedForAll(userAddress, this.PLEDGE)
      .call();
      
      // let set = await NOVAcon.methods
      // .setApprovalForAll(this.PLEDGE, false)
      // .send({ from: userAddress, value: 0 });      
      console.log('ttttttttttttttttttttttttt',checkApprove)
    console.log('this is checking the approval using allowance',cheche)
    console.log('uiouiouuoi',typeof(cheche))
    console.log('Contract contract contract',CoinContract)
    if(parseInt(cheche) > 0 && parseInt(amountF) <= parseInt(cheche))
    {
      this.checkingaprv = true;
    }
    else
    {
      this.checkingaprv = false;
      console.log('again again again again again again again again',this.checkingaprv)
    }
    console.log('hhhhhhhhhhhhhhhhhhhhhhh',this.checkingaprv)
    if(this.checkingaprv == false)
    {
      // const increaseAllowance = await CoinContract.methods.increaseAllowance(userAddress,amountt).send({from:userAddress,value:0})
      // console.log('&&&&&&&&&&&&&&&&&&&7',increaseAllowance)
    const approve = await CoinContract.methods.approve(this.PLEDGE,amountt).send({from:userAddress,value:0})
    console.log('approve',approve)

    if(approve)
    {
      this.checkingaprv = true ;
      // let set = await NOVAcon.methods
      // .setApprovalForAll(this.PLEDGE, true)
      // .send({ from: userAddress, value: 0 });
      // console.log('ssssssssssssssssssssssseeeeeeeeeeeeeet',set)
    }
    }
    if(this.checkingaprv == true)
    {
      const testval = parseInt(_amount)
      console.log('pppppppppppppppppppppppppppppppssssssssssssssssssssssssnnnnnnn',_projectSN)
      const pledge = await contract.methods.sendPledge(amountt,_projectSN).send({from:userAddress, to:this.PLEDGE,value:0})
      console.log('----Returned Pledge-----',pledge)
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
