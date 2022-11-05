
    //@ts-nocheck
    import { Component, HostListener, OnInit } from '@angular/core';
    import { DocumentRef } from 'ngx-owl-carousel-o/lib/services/document-ref.service';
    import { FirebaseService } from 'src/app/services/firebase.service';
    import { MetamaskComponent } from "src/app/dashboard/metamask/metamask.component";
    import { MetamaskService } from "src/app/services/metamask.service";
    import { environment } from 'src/environments/environment';
    import {
      MatDialog,
      MatDialogConfig,
      MatDialogRef,
    } from "@angular/material/dialog";
import { Scroll } from '@angular/router';

      @Component({
        selector: 'app-dao',
        templateUrl: './dao.component.html',
        styleUrls: ['./dao.component.scss']
      })
      export class DAOComponent implements OnInit {
      arry =     [];
      len = [];
      selLen = [];
      selected = [];
      name =     "";
      proposal = [];
      isConnected: any = null;
      coreTeam:any = null;
      notcoreTeam:any = null;
      not : any = null;
      data: any = null;
      datalength:any = null;
      proposalAddress = [];
      Team =      [];
      TeamAddress = [] ;
      TK =         "";
      loadFirstTime: boolean = true;
      dialogConfig = new MatDialogConfig();
      "dialogueReference": MatDialogRef<MetamaskComponent>;
      not : any = null;
      

        constructor(private db:FirebaseService,
          private metaMaskService: MetamaskService,
          public dialog: MatDialog,) { }
        toggle() {
          document.getElementById("down").classList.toggle("showw");
          // document.getElementById("down").style.display = "flex";
          // document.getElementById("navi").classList.toggle("rtoate180");
          // document.getElementsByClassName("fa-chevron-down")[0].classList.toggle("rtoate180");
        }
        toggleSelected() 
        {
          document.getElementById('downT').classList.toggle('showw')
        }
        toggleDes()
        {
          // document.getElementsByClassName('dessG')[0].classList.toggle("showw")
          document.getElementById('dessG').classList.toggle("showw")
        }
        toggleDesT()
        {
          document.getElementById('dessGT').classList.toggle("showw")
        }
        proposalFun()
        {

        }
        async t()
        {

          const userAddress = localStorage.getItem('walletId')
        //  let arrr = await this.db.getData().then
        //  {
        //   console.log('arrrrrrrrrrrrrrrrrrrrrr',arrr.length)
        //  }
        
        
         const b = await this.db.Glength()
         this.selLen = b ; 
          
          console.log('666666666666666666666666666',await this.db.Glength())
        const data =  await this.db.getData()
        this.arry = data
        console.log(data.length,'All projects  list ')
        console.log(this.arry,'this is arry')
        const Time = Date.now();
        console.log('this is time now',Time)
       
        const admin = environment.CoreTeam
        console.log(admin,'lllllllllllllllllllllllllllllllllllllllllllllllll')  
        console.log(userAddress,'#############################')
        if(userAddress)
        {
          this.isConnected = 'true';
          if(userAddress === admin.toLocaleLowerCase())
          {

                 
            this.coreTeam = 'true'
            
            
                
          }
         else
          {
           console.log('ooooooooooooooooooooooooooooooooooooooooooo')
          }
          
        }
        else
        {
          this.isConnected = null;
        } 
        const selected = await this.db.selected();
        this.selected = selected
        console.log('selected projects list',selected)
        }



          tests = (event): void =>
        {
          const array = <any>[]
          console.log('this is the best test',event)
          array.push({name:event.path[0].innerHTML,Amount:event.path[2].children[2].firstChild.innerHTML,
          src:event.path[1].firstChild.currentSrc,Description:event.path[2].children[1].lastChild.innerHTML,
          DescriptionT:event.path[1].children[1].firstElementChild.innerHTML
          })
          const Array = array.map(Item => {
            console.log('item',Item)
                  
            return Item
          })
          this.proposal = Array
          if(this.proposal.length > 0)
          {
            const dat = document.getElementById('AppPage')
            const d = document.getElementById('ProposalPage')
            const pro = document.getElementById('selectedAppPage')
            
            if(dat.style.display == 'block' || dat.style.display == "flex")
            {
            dat.style.display = 'none';
            d.style.display = 'flex';
            }
            if(pro.style.display == "flex" || pro.style.display == "block")
            {
                pro.style.display = "none";
                d.style.display = 'flex';
            }
            console.log('this vvvvvvvvv',this.proposal.length)
        
          console.log('ooooooooo',d)
          }
          
          console.log('88888888888888888',event.path[1].children[1].childNodes[0].textContent)
          const iK = event.path[1].children[1].childNodes[0].textContent;
          console.log(iK,'o')
          this.db.getTeam(iK)
          const Teams = this.db.getTeam(iK)
          this.Team = Teams
        
          console.log('16161616616161616',Teams)
          // .then 
          // {
          //   const dat = document.getElementById('AppPage')
          // dat.style.display = 'none'
          // console.log('datattttttt',dat)
          // // if(array.length != 0)
          
          // const d = document.getElementById('ProposalPage')
          // console.log('ooooooooooooooo',d)
          // }
          // console.log('ttttttttt',array)
          
          console.log('dddddddddd',array)
          // document.getElementById('AppPage').style.display = 'none';
          // document.getElementById('ProposalPage').style.display = 'block'
          console.log('gggggggggg',this.proposal)
        }
        ngOnInit(): void {
        this.t();
       
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
            console.log('9999999999999999999999999999999999999999999999999999999999',this.datalength)
          
            localStorage.setItem("walletId", this.isConnected);
            
            this.isConnected = 'true'
            this.getget();
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
      
        

      applicationPage()
      {
        document.getElementById('landing').style.display="none";
        document.getElementById('AppPage').style.display="block";
        document.getElementById('PDT').style.display = "none";
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      selectedProjects()
      {
        document.getElementById('landing').style.display="none";
        document.getElementById('selectedAppPage').style.display = "block";
        document.getElementById('PDT').style.display = "none";
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20);
        }
      }
      gotoTop() {
        window.scroll({
          top: 0,
          behavior: 'smooth',
        });
      }
      ProposalPage()
      {
        document.getElementById('ProposalPage').style.display = "flex";
        document.getElementById('landing').style.display = "none";
        document.getElementById('PDT').style.display = "none";
        window.scrollY(0)
      }
    async checker()
    {
      const u = await localStorage.getItem('walletId')
      const a =this.db.getByAddress(u)
      if (a.length > 0)
      {
        this.data = 'true'
      }
      console.log(a,'&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
      // setInterval()
    //  if(a.length)
    //   {
    //     console.log('b66666666666666666',d.length)
    //     console.log('b66666666666666666',d.values)
    //     this.data = 'true';
    //   }
  
    }  
      async ProAddress()
      {
        setInterval(this.checker(),1000)
        const check =await localStorage.getItem('walletId')
        console.log('check check check check check',check)
        const d = this.db.getByAddress(check)
        console.log(d.length,'-----------------------------')
        const array = []
    
        const a = await document.getElementsByClassName('hoho')
        console.log(a,'&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
        setInterval(
          a,1000)
       if(a.length)
        {
          console.log('b66666666666666666',d.length)
          console.log('b66666666666666666',d.values)
          this.data = 'true';
        }
       
        if(check == null)
        {
          this.isConnected = null;
          this.not = 'true';
        }
        else
        {
          this.isConnected = 'true'
          this.not = null
        }

        console.log('uuuuuuuuuuuuuuuuuuuuuuuuu',this.isConnected)
        document.getElementById('PDT').style.display = "block";
        document.getElementById('landing').style.display = "none";
      
     
      // else
      // {
      //   // document.getElementById('PDT').style.display = "none";
      //   document.getElementById('landing').style.display = "none";
        
      //   // this.isConnected = null;
      //   document.getElementById('PDT').style.display = "flex";
      //   // this.not = 'true';
      //   console.log('yyyyyyyyyyyyyyyyy ( not connected)',this.isConnected)
      // }
      }
      getget()
      {
        const userAddress = localStorage.getItem('walletId');
        // this.isConnected = 'true';
   console.log('yyyyyyyyyyyyyyyyyyyyyyy',this.isConnected,userAddress)
   // this.not = null;
 this.db.getByAddress(userAddress)
 this.proposalAddress =<any> this.db.getByAddress(userAddress)
 const te = <any>  this.db.getByAddress(userAddress)
 
 console.log(this.datalength,'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')
 console.log('8888888888888888888888',this.proposalAddress)

 this.db.getTeamAdress(userAddress);
 this.TeamAddress =   this.db.getTeamAdress(userAddress)
 console.log(this.TeamAddress,'teamuuuuuuuuuuuuuuuuuu')



 return 
      }
      back()
      {
        document.getElementById('landing').style.display = "block";
        document.getElementById('selectedAppPage').style.display = "none";
        document.getElementById('AppPage').style.display = "none";
        document.getElementById('PDT').style.display = "none";
      }
      backApp()
      {
        document.getElementById('AppPage').style.display = "block";
        document.getElementById('ProposalPage').style.display = "none";
        document.getElementById('PDT').style.display = "none";
      }
      backAppTwo()
      {
        document.getElementById('AppPage').style.display = "none";
        document.getElementById('ProposalPage').style.display = "none";
        document.getElementById('PDT').style.display = "none";
        document.getElementById('landing').style.display = 'block'
      }
      myCallbackFunctiontbl = (args: any): void => {
        console.log(',,,,,,,,,,,,,,,,,,,,,,,,,,,,',args)
        // args.path[2].children[0].children[5].nextElementSibling.classList.toggle('showw')
        // args.style.display = 'block'
        args.path[2].children[1].lastChild.classList.toggle('showw');
        }
        CallbackFunctiontblT = (args: any):void =>{
          console.log(',,,,,,,,,,,,,,,,,,,,kkkk',args.path[1].children[6])
          args.path[1].children[6].classList.toggle('showw')
        }
        myCallbackFunctionupVote(args){
          console.log('jjjjjjjjjjjjjjjjjjjjj',args.path[2].children[4].firstChild.firstChild.firstChild.nextElementSibling.innerHTML)
          // var counter = 1
          const data = args.path[2].children[4].firstChild.firstChild.firstChild.nextElementSibling;
          let key = args.path[2]['children'][1]['childNodes'][1]['childNodes'][0].data;
          console.log(key ,'*********************',args.path[2]['children'][1]['childNodes'][1]['childNodes'][0].data)
          var val = parseInt(data.textContent)
          val++;
          data.textContent = val;
          console.log(val,'parsed')
          this.db.upVote(key,val)
          
        }
        myCallbackFunctionDownVote = (args: any): void => {
          console.log('jjjjjjjjjjjjjjjjjjjjj',args.path[2].children[4].firstChild.lastChild.lastChild)
          // var counter = 1
          // args.path[2].children[4].firstChild.firstChild.firstChild.nextElementSibling;
          const data = args.path[2].children[4].firstChild.lastChild.lastChild

          let key = args.path[2]['children'][1]['childNodes'][1]['childNodes'][0].data
          console.log(key , '*********************')
          
          var val = parseInt(data.textContent)
          val++;
          data.textContent = val;
          
          console.log(val,'parsed')
          
          this.db.downVote(key,val.toString())
          
        }

      sortTable() {
          var word, table, rows, switching, i, x, y, shouldSwitch;
          table = document.getElementById("myTable");
          word = document.getElementById("word")
          switching = true;
          /*Make a loop that will continue until
          no switching has been done:*/
          word.innerHTML = "Name"
          while (switching) {
            //start by saying: no switching is done:
            switching = false;
            rows = table.rows;
            word.innerHTML = "Name"
            document.getElementById('word').innerHTML = "Name"
            /*Loop through all table rows (except the
            first, which contains table headers):*/
            for (i = 1; i < (rows.length - 1); i++) {
              //start by saying there should be no switching:
              shouldSwitch = false;
              /*Get the two elements you want to compare,
              one from current row and one from the next:*/
              x = rows[i].getElementsByTagName("TD")[0].getElementsByClassName('name')[0];
              y = rows[i + 1].getElementsByTagName("TD")[0].getElementsByClassName('name')[0];
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

        sortTableT() {
          var word, table, rows, switching, i, x, y, shouldSwitch;
          table = document.getElementById("myTableT");
          word = document.getElementById("wordT")
          switching = true;
          /*Make a loop that will continue until
          no switching has been done:*/
          word.innerHTML = "Name"
          while (switching) {
            //start by saying: no switching is done:
            switching = false;
            rows = table.rows;
            word.innerHTML = "Name"
            document.getElementById('wordT').innerHTML = "Name"
            /*Loop through all table rows (except the
            first, which contains table headers):*/
            for (i = 1; i < (rows.length - 1); i++) {
              //start by saying there should be no switching:
              shouldSwitch = false;
              /*Get the two elements you want to compare,
              one from current row and one from the next:*/
              x = rows[i].getElementsByTagName("TD")[0].getElementsByClassName('name')[0];
              y = rows[i + 1].getElementsByTagName("TD")[0].getElementsByClassName('name')[0];
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


        sortTableAmount() {
          var word, table, rows, switching, i, x, y, shouldSwitch;
          table = document.getElementById("myTable");
          word = document.getElementById("word")
          switching = true;
          /*Make a loop that will continue until
          no switching has been done:*/
          word.innerHTML = "Name"
          while (switching) {
            //start by saying: no switching is done:
            switching = false;
            rows = table.rows;
            word.innerHTML = "Name"
            document.getElementById('word').innerHTML = "Name"
            /*Loop through all table rows (except the
            first, which contains table headers):*/
            for (i = 1; i < (rows.length - 1); i++) {
              //start by saying there should be no switching:
              shouldSwitch = false;
              /*Get the two elements you want to compare,
              one from current row and one from the next:*/
              x = rows[i].getElementsByTagName("TD")[0].getElementsByClassName('amount')[0];
              y = rows[i + 1].getElementsByTagName("TD")[0].getElementsByClassName('amount')[0];
              //check if the two rows should switch place:
              if (x > y) {
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


        // @HostListener('window:load',['$event'])
        // test()
        // {
        //   const userAddress = localStorage.getItem('walletId')
        //   if(userAddress)
        //   {
        //     this.isConnected = 'true';
        //     this.ProAddress();
        //     this.not = null;
        //     console.log('oooooooooooooooooooooo',userAddress,this.isConnected)
        //   }
        //   else
        //   {
        //     this.isConnected = null;
        //     this.not = 'true';
        //     console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',userAddress,this.isConnected)
        //   }
        // }
      

      }
