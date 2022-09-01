  import { GithubService } from 'src/app/services/github.service'; 
  import { HttpClient } from '@angular/common/http';
  import {
    AfterViewChecked,
    AfterViewInit,
    Component,
    ElementRef,
    HostListener,
    OnInit,
    ViewChild,
    ViewEncapsulation,
  } from '@angular/core';
  import { Title } from '@angular/platform-browser';
  import { environment } from 'src/environments/environment';
  import { OwlOptions } from 'ngx-owl-carousel-o';
  import { Router } from '@angular/router';
  import {
    MatDialog,
    MatDialogConfig,
    MatDialogRef,
  } from '@angular/material/dialog';
  import { MetamaskService } from 'src/app/services/metamask.service';
  import { Web3Service } from 'src/app/services/web3.service';
  import { MatSnackBar } from '@angular/material/snack-bar';
  import { NgxSpinnerService } from 'ngx-spinner';
  import { NftService } from 'src/app/services/nft.service';
  import { MetamaskComponent } from 'src/app/dashboard/metamask/metamask.component';
import { PopupComponent } from 'src/app/dashboard/popup/popup.component';
import { FormBuilder } from '@angular/forms';
import { threadId } from 'worker_threads';


  @Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
    encapsulation: ViewEncapsulation.None,
  })
  export class HomepageComponent implements OnInit,AfterViewInit {
    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      center: true,
      autoplay: true,
      autoplayTimeout: 2000,

      navText: ['', ''],
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 2,
        },
        740: {
          items: 3,
        },
        940: {
          items: 7,
        },
      },
      nav: true,
    };
    clientUrl = environment.clientUrl;

    isShow: boolean = false;
    topPosToStartShowing = 100;

    gotHitElements = {};
    isLineFilled = false;

    counter: number = 0;

    isMetamask: boolean = false;
    isConnected: any = null;
    displayed: any = null;
    customData: any;
    pendingNFT: any = [];
    projectcount: number = 0;
    number: Number = 100;
    loadFirstTime: boolean = true;
    dialogConfig = new MatDialogConfig();
    'dialogueReference': MatDialogRef<MetamaskComponent>;
    'popupreference' : MatDialogRef<PopupComponent>;

    walletAddress = '';
    mintObj: any = {
      walletAddress: '',
      mintHash: '',
      status: '',
      txnHash: '',
    };
    obj: any = {
      _id: '',
      status: '',
      txnHash: '',
    };

  
    constructor(
      private router: Router,
      public dialog: MatDialog,
      private metaMaskService: MetamaskService,
      private web3Service: Web3Service,
      private snack: MatSnackBar,
      private spinner: NgxSpinnerService,
      private nftService: NftService,
      private titleService: Title,
      private githubservice:GithubService,
      private http: HttpClient,
      private formBuilder: FormBuilder
    ) {
      this.titleService.setTitle('Nova Dao');
    }

      team:String[]  

    
    getTeams()
    {  
        this.githubservice.getTeam() 
        this.team=this.githubservice.getTeam()
        if(this.githubservice.getTeam())
        {
          console.log('NovaDao Team Members')
        }
        
    }
    async iframepopup()
    {
        
     
      
        // console.log('dv',Div)
      this.popupreference = this.dialog.open(PopupComponent, {
        panelClass: 'popUp',
        disableClose: false,
        data: (this.dialogConfig.data = {
          popupContent: true,
          loader:true,
        }),
      });
      
      this.popupreference.afterClosed().subscribe((result) => {
        console.log(result)
        
      });
     
      // this.snack.open(x.className = 'show', "X", {
      //   duration: 10000,
      //   panelClass: ["popUp"],
      //   horizontalPosition: "center",
      // });
      
    }
     checkIfLoaded() {
      var data = null;
      window.addEventListener("load", function (event) {
        console.log("All resources finished loading!");
        const test  =  document.getElementsByClassName("subscribe-widget")
        const Submitbtn =  document.getElementsByClassName("button")
        
      setTimeout(()=>{                          
        
        const iframe = document.getElementById('ifraContainer')                               
                iframe.style.visibility = "visible"
        
       }, 5000 )
        
       


        data = true
       
        return event
        
      });
      
      // setTimeout(()=>{                          
        
        
      //  }, 5000 )
      console.log(data,'datadaaa')
    }
    // async subscribe()
    // {
    //   const Submitbtn = document.getElementsByClassName("button")
    //   // const TBemail = await document.getElementsByClassName("")
    //   const SignedupDiv = document.getElementsByName("is-fully-subscribed")

    //   const test  = document.getElementsByClassName("subscribe-widget")
    //   if (SignedupDiv)
    //   {
    //     console.log("you have got it",SignedupDiv)
    //   }
    //   if(Submitbtn)
    //   {
    //     console.log("this is submit button",Submitbtn)
    //   }
      
    //   console.log('this is test 1 ',test)

     

    // }
    
    ngAfterViewInit(): void {
    
    }
  
    subscribeHome()
    {
      document.getElementById('ifraContainer2').style.visibility = 'visible';
    }
    ngOnInit(): void {
      this.gotoTop();
      this.getTeams();
      this.checkIfLoaded(); 
      setTimeout(()=>{                          
       this.iframepopup(); 
        
       }, 5000 )

       setTimeout(()=>{
        this.subscribeHome();
       },16000)
      if (history.state.routedFrom == 'mint') {
        location.href = 'home#roadmap';
      }

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
          this.checkIfUserWalletConnected();
        }
      });

      if (window.localStorage.getItem('logout') == 'false') {
        this.checkIfUserWalletConnected();
      }
      const userAddress = localStorage.getItem('walletId');

      let roadmapElems = document.querySelectorAll('.points.new_roadmaps');

      for (let i = 0; i < roadmapElems.length; i++) {
        roadmapElems[i].classList.add('hide');
        this.gotHitElements = {
          ...this.gotHitElements,
          [`element-${i}`]: false,
        };
      }
    }

    async checkIfUserWalletConnected() {
      this.isConnected = await this.metaMaskService.isMetaMaskConnected();
      if (!this.isConnected) {
        this.isMetamask = false;
        localStorage.setItem('logout', 'true');
        localStorage.removeItem('walletId');
      } else {
        localStorage.setItem('walletId', this.isConnected);
      }
    }

    // dialog box for user connect to metamask wallet
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

    // dialog box for alert
    alertDialog() {
      this.dialogueReference = this.dialog.open(MetamaskComponent, {
        panelClass: 'modalPending_list',
        disableClose: true,
        data: (this.dialogConfig.data = {
          alertBox: true,
        }),
      });
    }

    getCenterCoords(element: any) {
      const { top, left, width, height } = element.getBoundingClientRect();

      return {
        x: left + width / 2 + window.pageXOffset,
        y: top + height / 2 + window.pageYOffset,
      };
    }

    @HostListener('window:scroll')
    checkScroll() {
      let defaultLine = document.querySelector('.line.default') as HTMLElement;
      let lineToDraw = document.querySelector('.line.draw') as HTMLElement;
      let defaultLineHeight = defaultLine.clientHeight;
      let windowDistance = document.documentElement.scrollTop;
      let windowHeight = document.documentElement.clientHeight / 2;
      let defaultLineDistance = defaultLine.offsetTop;

      if (windowDistance >= defaultLineDistance - windowHeight) {
        let line = windowDistance - defaultLineDistance + windowHeight / 1.415;

        if (line <= defaultLineHeight) {
          lineToDraw.style.height = Math.round(line) + 4 + 'px'; // draw line
          // if (lineToDraw.clientHeight >= defaultLine.clientHeight) this.isLineFilled = true;
        }
      }

      let roadmapElems = document.querySelectorAll('.points.new_roadmaps');

      for (let i = 0; i < roadmapElems.length; i++) {
        if (
          window.pageYOffset + 300 >= this.getCenterCoords(roadmapElems[i]).y &&
          !this.gotHitElements[`element-${i}`]
        ) {
          this.gotHitElements[`element-${i}`] = true;
          roadmapElems[i].classList.remove('hide');
        } else if (
          window.pageYOffset + 300 <= this.getCenterCoords(roadmapElems[i]).y &&
          this.gotHitElements[`element-${i}`]
        ) {
          this.gotHitElements[`element-${i}`] = false;
          roadmapElems[i].classList.add('hide');
        }
      }
    }

    gotoTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }
