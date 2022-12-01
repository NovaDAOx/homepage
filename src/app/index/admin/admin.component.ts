//@ts-nocheck
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MetamaskComponent } from 'src/app/dashboard/metamask/metamask.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import { MetamaskService } from 'src/app/services/metamask.service';
import { PledgingService } from 'src/app/services/pledging.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  
  latestPro =[];
  name = "" ;
  Team = [];
  proposal = [] ;
  prop = [] ;




  loadFirstTime: boolean = true;
  dialogConfig = new MatDialogConfig();
  "dialogueReference": MatDialogRef<MetamaskComponent>;
  not : any = null;
  isConnected: any = null;
  data: any = null;

  constructor(private db:FirebaseService,
    private metaMaskService: MetamaskService,
    private snack: MatSnackBar,
    public dialog: MatDialog,private pledginservice:PledgingService) { }
 
  async latest()
  {
    const userAddress = localStorage.getItem('walletId')
    this.db.selected();
    const recPro = <any> await this.db.selected();
    this.latestPro =<any>await recPro
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^6',this.latestPro)
    
    
    // const d = document.getElementById('data')
    // const b = document.getElementById('kingsLanding')
    // b.style.display = "none";
    // d.style.display = "flex";

    this.db.getTeam(userAddress);
    this.Team =   this.db.getTeam(userAddress)
    console.log(this.db.getTeam(userAddress),'teamuuuuuuuuuuuuuuuuuu')
  
  }
  async createGrant(event)
        {
          console.log(event,'creating grant ...')
          let SN = event.path[2].children[4].childNodes[1].innerText
          const ProSn = parseInt(SN)
          let amt = event.path[2].children[4].childNodes[4].innerText
          
          const  userAdd = event.path[2].children[4].childNodes[7].innerText
          const address = userAdd.toString();
          let use = '0xa902C87614267a412E2F7a95E08E0f92f8106db5'
          const amtFinal = amt.replace(/\D/g, '');
          const Famt = Number(amtFinal).toFixed(18)
          let projectSN = ""
          const pp = event.path[2].childNodes[3].children[3].innerText
          console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiii',pp)
          console.log(typeof(SN),'sns sns sns sns')
          console.log(typeof(amtFinal),'sns sns sns sns')
          console.log(typeof(userAdd),'sns sns sns sns')
          console.log(address, 'fnf fnf fnf fnf fnf')
        if(SN === "")
        {
          projectSN = Date.now()
          console.log('SN snsnsnsnsnns',projectSN)
        }
        else
        {
          projectSN = event.path[2].children[4].childNodes[1].innerText
        }
        console.log('pppppppppppppppppp',projectSN)
         const creategrant =  await this.pledginservice.createGrant(projectSN,Famt,address);
         console.log('------------grant created',creategrant)
         if(creategrant)
         {
          console.log('this is grant ',creategrant)
           const key = event.path[2].childNodes[3].children[3].innerText
          this.db.createGrantDB(key,projectSN,true)
          const txn = creategrant.blockHash
          const cdk = document.getElementsByClassName("cdk-overlay-container")[0]
          cdk.style.visibility = 'visible'
        console.log("grant created",creategrant)
        this.snack.open('Grant Created Successfully','X', {
          duration: 100000,
          panelClass: ['success-order'],
          horizontalPosition: 'end',
        });
        const recPro = <any> await this.db.selected();
        this.latestPro =<any>await recPro
        return creategrant

       
         }
         else
         {
          const txn = creategrant.blockHash
          const cdk = document.getElementsByClassName("cdk-overlay-container")[0]
          cdk.style.visibility = 'visible'
        console.log("failed",creategrant)
        this.snack.open('Failed','X', {
          duration: 100000,
          panelClass: ['success-order'],
          horizontalPosition: 'end',
        });
        return creategrant
         }
        //  return creategrant;
        //   }
        //   if(userAddress != accessOne ||userAddress != accessTwo || userAddress != accessThree)
        //   {
          
        //     window.alert('only cryptonasauros')
        //     return null;
        //   }
        }
        async changeWallet(event:any)
        {
          console.log(event)
          let SN = event.path[2].children[6].childNodes[1].innerText
          let address = event.path[2].children[6].childNodes[4].innerText
          console.log(SN,'this is SN')
          const transactionAddress = localStorage.getItem('walletId')
          console.log(address,'this is address')
          const data = await this.pledginservice.changeWallet(SN,address)
          console.log(data)
          return data
          
        }
async removeGranT(event)
{
  console.log('tttttttttttt',event)
  const SN = event.path[2].children[8].childNodes[1].innerText
  console.log('this is SN',SN)
const address = localStorage.getItem('walletId')
  const remove = await this.pledginservice.removeGrant(SN,address)
  console.log('removing grant returned result',remove)
  if(remove)
         {
        const  projectSNremoval = 0
          console.log('this is grant removal ',remove)
           const key = event.path[2].childNodes[3].children[3].innerText
          this.db.createGrantDB(key,projectSNremoval,false)
          
          const cdk = document.getElementsByClassName("cdk-overlay-container")[0]
          cdk.style.visibility = 'visible'
       
        this.snack.open('Grant Removed Successfully','X', {
          duration: 100000,
          panelClass: ['success-order'],
          horizontalPosition: 'end',
        });
        

       
         }
         else
         {
          // const txn = creategrant.blockHash
          const cdk = document.getElementsByClassName("cdk-overlay-container")[0]
          cdk.style.visibility = 'visible'
        console.log("failed",remove)
        this.snack.open('Failed','X', {
          duration: 100000,
          panelClass: ['success-order'],
          horizontalPosition: 'end',
        });
        
         }
  // return remove
  // if(remove != null)
  // {
  //   const cdk = document.getElementsByClassName("cdk-overlay-container")[0]
  //   cdk.style.visibility = 'visible'
  // console.log("success",remove)
  // this.snack.open('Wallet Changed Successfully','X', {
  //   duration: 100000,
  //   panelClass: ['success-order'],
  //   horizontalPosition: 'end',
  // });
  // }
  // else
  // {
  //   const cdk = document.getElementsByClassName("cdk-overlay-container")[0]
  //   cdk.style.visibility = 'visible'
  // console.log("failed",remove)
  // this.snack.open('Failed','X', {
  //   duration: 100000,
  //   panelClass: ['success-order'],
  //   horizontalPosition: 'end',
  // });
  // }
  // return remove

}
  async toggleGrant(event:any)
  {
    console.log('dara')
    console.log(event,'event event')
    let requiredAmt = event.path[3].children[3].childNodes[1].childNodes[0].innerText
    // let requredTxt = event.path[3].children[4].children[1].innerText
    let req = event.path[3].children[4].childNodes[1].innerText
    
    req= requiredAmt
    console.log('rrrrrrrrrrrrrrr',req)
    // let SN = event.path[3].children[4].children[3].innerText
    let creatBtn = event.path[3].children[4].children[4].classList[0]
    console.log(creatBtn,'create btn')
    // let created = event.path[3].children[4].children[5].classList[0]
    // console.log(created, 'created indicator')
    // console.log(SNCHeck,'TTTTTTTTTTTTTTTTT')
   
      // event.path[3].children[4].children[4].classList.replace('Show') = false;
      
    
      
      
      
    
    // console.log('ttttttttttttttttt',requiredTxt)
    
     event.path[3].children[4].classList.toggle("showw")
     requredTxt = requiredAmt
     
  }
  async togglechangeWallet(event:any)
  {
    console.log(event)
    event.path[3].children[6].classList.toggle('showw')
    
  }
  async removeG(event)
  {
    event.path[3].children[8].classList.toggle('showw')
  }
  ngOnInit(): void {

    this.latest();

      if (!window.localStorage.getItem("logout")) {
        window.localStorage.setItem("logout", "false");
      }
      this.metaMaskService.accountChanged.subscribe((data) => {
        if (
          this.loadFirstTime == false &&
          data &&
          window.localStorage.getItem("logout") == "false"
        ) {
          this.isConnected = null;
        
          this.checkIfUserWalletConnected();
        } else if (
          this.loadFirstTime == true &&
          data &&
          window.localStorage.getItem("logout") == "false"
        ) {
          this.loadFirstTime = false;
        }
      });

      this.metaMaskService.firstTimeMetamaskConnect.subscribe((data: any) => {
        if (data === "firstTimeMetamaskConnect") {
          this.isConnected = null;
          
          this.checkIfUserWalletConnected();
        }
      });

      if (window.localStorage.getItem("logout") == "false") {
        this.checkIfUserWalletConnected();
      }

    }



    showMetamaskContent() {
    
      this.dialogueReference = this.dialog.open(MetamaskComponent, {
        panelClass: 'custom-modalbox',
        disableClose: true,
        data: (this.dialogConfig.data = {
          metamaskContent: true,
        }),
      });
      const data = document.getElementsByClassName('cdk-overlay-container')[0]
      data.style.visibility = 'visible'
      this.dialogueReference.afterClosed().subscribe((result) => {
      
      });
    }

    async checkIfUserWalletConnected() {
      this.isConnected = await this.metaMaskService.isMetaMaskConnected();
    
    
      if (!this.isConnected) {
        this.isConnected = null ;
        console.log('8888888888888888888888888888888888888888888',this.isConnected)
        console.log('8888888888888888888888888888888888888888888',this.data.length)
        this.not = 'true'
        
        localStorage.setItem("logout", "true");
        localStorage.removeItem("walletId");
        
      } else {
        console.log('8888888888888888888888888888888888888888888',this.data)
      
      
        localStorage.setItem("walletId", this.isConnected);
        
        // this.isConnected = 'true'
      
        const a = this.db.getByAddress(this.isConnected)
        const arrayT = []
        arrayT.push(await this.db.getByAddress(this.isConnected))

        console.log(arrayT,'&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
        // if(arra > 0)
        // {
        //     this.data = null;
        // }
        // else
        // {
        //   this.data = null;
        // }
        const b = document.getElementById('Data')
        console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$',b)
        this.not = null;

        const userAddress = localStorage.getItem('walletId')        
      }
    }









  }


