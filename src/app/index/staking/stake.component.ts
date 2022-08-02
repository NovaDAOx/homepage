    import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
    import {Moralis} from 'moralis'
    import { MoralisService } from 'src/app/services/moralis.service';
    import { MetamaskService } from 'src/app/services/metamask.service';
    import { Web3Service } from 'src/app/services/web3.service';
    import {EtherService} from 'src/app/services/ether.service';
    import { MatSnackBar } from '@angular/material/snack-bar';

    import { NgxSpinnerService } from 'ngx-spinner';
    import { NftService } from 'src/app/services/nft.service';
    import { MetamaskComponent } from 'src/app/dashboard/metamask/metamask.component';
    import {
      MatDialog,
      MatDialogConfig,
      MatDialogRef,
    } from '@angular/material/dialog';
    import { Router } from '@angular/router';
import { arrayify } from 'ethers/lib/utils';
import { CdkAccordion } from '@angular/cdk/accordion';


    @Component({
      selector: 'app-stake',
      templateUrl: './stake.component.html',
      styleUrls: ['./stake.component.scss'],
      encapsulation:ViewEncapsulation.None,
    })

    export class StakeComponent implements OnInit {
    
      // constructor(private moralisservice:MoralisService) { }
    list:String[]
    tokenids:any[]
    loadFirstTime: boolean = true;
    isMetamask:boolean = true ;

    public userOb = this.moralisservice.observeUser();


    constructor(
      private router: Router,
      public dialog: MatDialog,
      private metaMaskService: MetamaskService,
      private moralisservice:MoralisService,
      private web3Service: Web3Service,
      private etherService: EtherService,
      private snack: MatSnackBar,
      private spinner: NgxSpinnerService
      

    )
    {}
    
    STAKEbtn:any = null;
    NFTbtn: any = null;
    loading2:any = null;
    loading4:any = null;
    loading3:any = null;
    approvebtn:any = null;
    Selectbtn:any = null;
    TokenId:any = null;
     
    Deselectbtn:any = null;
    async select_all()
    {
        this.Deselectbtn = 'show';
        this.Selectbtn = null;
        const allElements = Array.from(
          document.querySelectorAll('input[type=checkbox]')
        );
        const array = []
        allElements.forEach(element => {
          element.setAttribute('checked', 'checked');
          console.log('gggggggggggggggggg',element.getAttribute('value'))
          const value = parseInt(element.getAttribute('value'))
          array.push(value)
          this.tokenids = array
          console.log('select array',array)
          console.log('this is token id above array',this.tokenids)          
        });
        
    } 
    
    async deselect_all()
    {
        this.Selectbtn = 'show';
        this.Deselectbtn = null;
        const allElements = Array.from(
          document.querySelectorAll('input[type=checkbox]')
        );
        allElements.forEach(element => {
          element.removeAttribute('checked');
        });    
    }
    show()
    {
      this.loading3='show'

    }
    
  
    async interact()
    {
      this.etherService.setApproval().then(data => {

        
        if(data)
        {
          const co = document.getElementById('stakingsection').style
          co.backgroundColor = '#200028';
          co.pointerEvents = 'auto';
          co.opacity = '1'
          this.NFTbtn = null;
          this.loading2 = null;
          this.loading1 = null; 
          this.STAKEbtn = 'show'
          this.approvebtn = null;
          this.refreshData();
        }
        else
        {
          this.STAKEbtn = null;
          this.NFTbtn = 'show';
          this.loading2 = 'show';
          this.approvebtn = null;       
        }
        
        return data
        
      })
    }

    async approveall()
    {
      
      const userAddress = localStorage.getItem('walletId')
      if(userAddress)
      {
       
        this.allNFT();
        
        
        const co  = await document.getElementById('stakingsection').style
        co.backgroundColor = "gray"
        co.pointerEvents = 'none';
        co.opacity = '0.7'      
      }
      if(!userAddress)
      {
        const con = await  document.getElementById('stakingsection').style
        con.backgroundColor = '#200028'
        con.pointerEvents = 'auto'
        con.opacity = '1'
      }
    }
      allNFT()
    {
      
        this.moralisservice.getnfts().then(data => {
        const array = []
          console.log('dataNFT',data)
        for (var i=0; i<data.length;i++)
        {
          const json ={data:data[i]}
         array.push(data[i])
         this.list =array
                   
        }
        console.log('dataNFT2',this.list)
        this.NFTbtn='show'
        if(data)
        {
          this.loading1 = null;
          this.refreshData();
          
        }
        if(data.length == 0)
        {
          this.NFTtoadx="notoadx collection found"
          this.NFTbtn=null;
          
        }
        
        if(data.length != 0)
        {
          this.approvebtn = 'show'
        }
       if(!data)
       {
         this.loading1 = 'show'
       }
      })

    }
    
    tokenID()
    {
    
        let terms = document.querySelectorAll("input[type='checkbox']");
        let termsValChecked = [];
        [].forEach.call(document.querySelectorAll('input[name="checklist"]:checked'), function(cb) {
          console.log('xxxxxxxxxxxxxxxxxxxxx',cb.value); 
          
          // termsValChecked.push(cb.value)
          // console.log(termsValChecked)
          // this.tokenarray = termsValChecked
      });
 
  
    
    }
    
    async stake()
    {
      const wallet = localStorage.getItem('walletId')
      
     
      this.etherService.stakeMany(this.tokenids).then(data => {
        
        console.log('these are array of tokenids',this.tokenids)  
        const stakeMany = data.methods.stakeMany(this.tokenids).send({from : wallet,value:0});
        console.log('this is stake many ',stakeMany) 
        if(data)
        {
          this.refreshData();
        }  
      })
     this.refreshData();
    
    }
    async unstakeAll()
    {
      this.etherService.unstakeAll().then(data =>{
        console.log('this is unstaking part',data)
        if(data)
        {
          this.refreshData();
        }
      })
    }
async refreshData()
{
  this.etherService.refreshData().then(data => {
    console.log('refreshed data',data)  
    
  })
}
    dialogConfig = new MatDialogConfig();
    'dialogueReference': MatDialogRef<MetamaskComponent>;
    isConnected: any = null;
    loading1:any = null;
    NFTtoadx: any =null;
    checkuser:any = null;
      ngOnInit(): void {
      this.approveall()
        
        if (!window.localStorage.getItem('logout')) {
          window.localStorage.setItem('logout', 'false');
        }
        this.metaMaskService.accountChanged.subscribe((data) => {
          if (
            this.loadFirstTime == false &&
            data &&
            window.localStorage.getItem('logout') == 'false'
          ) {
            this.isConnected = null;
            this.loading1 = null ;
            this.NFTbtn= null;
            this.checkIfUserWalletConnected();
          } else if (
            this.loadFirstTime == true &&
            data &&
            window.localStorage.getItem('logout') == 'false'
          ) {
            this.loadFirstTime = false;
          }
        });

        this.metaMaskService.firstTimeMetamaskConnect.subscribe((data: any) => {
          if (data === 'firstTimeMetamaskConnect') {
            this.isConnected = null;
            this.loading1 = null;
            this.NFTbtn = null;
            this.checkIfUserWalletConnected();
          }
        });

        if (window.localStorage.getItem('logout') == 'false') {
          this.checkIfUserWalletConnected();
        }
      }
      async checkIfUserWalletConnected() {
        this.isConnected = await this.metaMaskService.isMetaMaskConnected();
        if (!this.isConnected) {
          this.isMetamask = false;
          localStorage.setItem('logout', 'true');
          localStorage.removeItem('walletId');
          this.loading1 = 'null'
        } else {
          localStorage.setItem('walletId', this.isConnected);
          this.moralisservice.startMoralis().subscribe(() => console.log('Started Moralis'));
          this.loading1 = 'show'
          const co  = await document.getElementById('stakingsection').style
          co.backgroundColor = "gray"
          co.pointerEvents = 'none';
          co.opacity = '0.7'      
          this.allNFT();

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
        this.dialogueReference.afterClosed().subscribe((result) => {        
        });
      }
      
      changeScrollbar() {
        this.router.navigate(['/home'], { state: { routedFrom: 'stake' } });
      }
    }
