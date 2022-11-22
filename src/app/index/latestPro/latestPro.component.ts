  //@ts-nocheck
  import { Component, OnInit } from '@angular/core';
  import { FirebaseService } from 'src/app/services/firebase.service';
  import { MetamaskComponent } from "src/app/dashboard/metamask/metamask.component";
  import { MetamaskService } from "src/app/services/metamask.service";
  import { environment } from 'src/environments/environment';
  import { PledgingService } from 'src/app/services/pledging.service';
  import Web3 from "web3";


  import {
    MatDialog,
    MatDialogConfig,
    MatDialogRef,
  } from "@angular/material/dialog";
import { threadId } from 'worker_threads';
import { from } from 'rxjs';
  @Component({
    selector: 'app-latestPro',
    templateUrl: './latestPro.component.html',
    styleUrls: ['./latestPro.component.scss']
  })
  
  export class latestProComponent implements OnInit {
    private web3Http = web3;
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
  amt = "";

    constructor(private db:FirebaseService,
      private metaMaskService: MetamaskService,
      public dialog: MatDialog,private pledginservice:PledgingService) { }
    async latest()
    {
      const userAddress = localStorage.getItem('walletId')
      this.db.latestPro();
      const recPro = <any> await this.db.latestPro()
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
    // toggle() {
    //   document.getElementById("downlatestPro").classList.toggle("showw");
    //   // document.getElementById("down").style.display = "flex";
    //   // document.getElementById("navi").classList.toggle("rtoate180");
    //   // document.getElementsByClassName("fa-chevron-down")[0].classList.toggle("rtoate180");
    // }
    backAppTwo()
    {
      const d = document.getElementById('Data')
      const b = document.getElementById('kingsLanding')
      d.style.display = "none";
      b.style.display  = "block";
    }
    propos = (event): void =>
    {
      // this.propzls();
      // document.getElementsByClassName('hoho')[0].style.display = "flex";
      const arry = <any>[]
      console.log(event.path[2].children[1].children[3].lastChild.childNodes[0].data,'ppppppppppppppppppppppp')
      arry.push({name:event.path[2].children[1].children[1].innerHTML,Description:event.path[2].children[1].children[2].innerHTML,
        Amount:event.path[2].children[1].children[3].children[1].innerText,src:event.path[2].children[0].children[0].currentSrc,
        Key:event.path[2].children[1].children[3].lastChild.childNodes[0].data,
        DescriptionT:event.path[2].children[1].children[3].children[3].childNodes[1].innerHTML
      }
        )
        console.log('++++++++++++++++++++++++',event.path[2].children[1].children[3].children[3].childNodes[0].innerHTML)
        const Array = arry.map(Item => {
          console.log('item',Item)
          return Item
        })
        this.prop = Array
        const userAddress = event.path[2].children[1].children[3].lastChild.childNodes[0].data
        this.db.getTeam(userAddress);
        this.Team = this.db.getTeam(userAddress)
        const  page = document.getElementById('kingsLanding')
        page.style.display ="none"
        
      
      }
      propzls()
      {
        
        // documeng.getElementById('landingLatest').style.display = "none"
      
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


    async sortDiv() {
      var word, div, rows, switching, i, x, y, shouldSwitch;
      div = await document.getElementById("MarFunLatest");
      word = document.getElementById("word")
      switching = true;
      /*Make a loop that will continue until
      no switching has been done:*/
      word.innerHTML = "Name"
      while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = div.getElementsByClassName('Pin')
        console.log('[[[[[[[[[[',rows)
        word.innerHTML = "Name"
        document.getElementById('word').innerHTML = "Name"
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        console.log(rows.length,'divvvvvvvvvvvvvvvvv')  
        for (i = 0; i < (rows.length); i++) {
          //start by saying there should be no switching:
          shouldSwitch = false;
          /*Get the two elements you want to compare,
          one from current row and one from the next:*/
          
          x = rows[i].getElementsByTagName('DIV')[1].getElementsByTagName('P')[1]
          console.log('dd',x)    
          console.log('testtttttttttt',rows[i + 1].getElementsByTagName('DIV')[1].getElementsByClassName('names')[0].innerHTML)
          // console.log('divvsssssssssss',rows[i].getElementsByTagName('DIV')[0].getElementsByClassName('PHolder')[0].children[1].innerText)
          // console.log(rows[i].getElementsByTagName("div")[0].getElementsByClassName('PHolder').getElementsByClassName('name'),'xxxxxxxxxxxxxxxxxxxxxxxxx')
           y = rows[i + 1].getElementsByTagName('DIV')[1].getElementsByClassName('names')[0]        
          //check if the two rows should switch place:
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
        word.innerHTML = "Name"
        if (shouldSwitch) {
          /*If a switch has been marked, make the switch
          and mark that a switch has been done:*/
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          
        }
        word.innerHTML = "Name"
      }
    }
    toggle()
    {
      document.getElementById('downlatestPro').classList.toggle('showw')
    }

    amount(event)
    {
      console.log(event)
      return event
    }
   async sendPledge(event)
    {
      console.log(event.path[1].children[0].childNodes[0].innerHTML)
      const pledgeamount = event.path[1].children[0].childNodes[0].innerHTML
      console.log(pledgeamount)
      const finalAmt = pledgeamount.replace(/[^,.,0-9]/g, '')
      console.log(finalAmt)
     const finalFi = Number(finalAmt).toFixed(18).toString()
     console.log('.........................',finalAmt)
      // const amount = await this.web3Http.utils.toHex(
      //   this.web3Http.utils.toWei(Number(finalAmt).toFixed(18), 'ether'))
      // console.log('this is pledge amount ---sending---', this.pledgeAmt)
        const userAddress = localStorage.getItem('walletAddress')
        const value = 0.1
        const projectSN = 1 
        const pledge  = await this.pledginservice.sendPledge(finalAmt,projectSN)
        console.log("Pledge latest projects",pledge)
        return pledge
        
    }
  
  }
