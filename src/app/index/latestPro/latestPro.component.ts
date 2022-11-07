  //@ts-nocheck
  import { Component, OnInit } from '@angular/core';
  import { FirebaseService } from 'src/app/services/firebase.service';
  import { MetamaskComponent } from "src/app/dashboard/metamask/metamask.component";
  import { MetamaskService } from "src/app/services/metamask.service";
  import { environment } from 'src/environments/environment';


  import {
    MatDialog,
    MatDialogConfig,
    MatDialogRef,
  } from "@angular/material/dialog";
import { threadId } from 'worker_threads';
  @Component({
    selector: 'app-latestPro',
    templateUrl: './latestPro.component.html',
    styleUrls: ['./latestPro.component.scss']
  })
  export class latestProComponent implements OnInit {
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
      public dialog: MatDialog,) { }
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

  
  }
