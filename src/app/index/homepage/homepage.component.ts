//@ts-nocheck
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
  scroll:any = [];
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
      console.log('afj;lksdjfa;ldksf',this.githubservice.getTeam())
      this.team=this.githubservice.getTeam()
      if(this.githubservice.getTeam())
      {
        console.log('NovaDao Team Members')
      }
      
  }
  async iframepopup()
  {
        
    this.popupreference = this.dialog.open(PopupComponent, {
      panelClass: 'popUp',
      disableClose: true,
      data: (this.dialogConfig.data = {
        popupContent: true,
        loader:false,
      }),
    });
    
    this.popupreference.afterClosed().subscribe((result) => {
      this.dialog.closeAll()
      const cdk = document.getElementsByClassName("cdk-overlay-container")[0]
      cdk.style.visibility = 'visible'
   
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
        console.log('ttttttttttttt',test)
    setTimeout(()=>{                          
      
       console.log('t2t2t2t2t2t2t2',test)
      const iframe = document.getElementById('ifraContainer')                               
              iframe.style.visibility = "visible"
        const faded = document.getElementsByClassName('cdk-overlay-container')[0]
        faded.style.visibility = 'visible'
        const iframee = document.getElementById('iframe2')
        
        // var innerDoc = iframee.contentDocument || iframee.contentWindow.document;
        
    }, 5000 )
      this.setTimeout(()=>{
        document.getElementById('ifraContainer2').style.visibility = 'visible';
        const daoworkContainer = document.getElementsByClassName('daowork_container')[0]
        daoworkContainer.style.marginTop = "175px"
        // window.addEventListener('message', event => {
        //     if (event.origin.startsWith('http://localhost:4228')) { //check the origin of the data!
        //       // The data was sent from your site. It sent with postMessage is stored in event.data:
        //       console.log(event.data,'////////////////////');
        //     } else {
        //       // The data was NOT sent from your site!
        //       console.log(event.data,'```````````````````');
        //       return;
        //     }
        //   });
    },8000)
     

     
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

   

//   // }
//   sub()
//   {
//     window.onload = function() {
//     function receiveMessage(e) {
//     document.documentElement.style.setProperty('--header_bg', e.data.wl.header_bg);
//     document.documentElement.style.setProperty('--header_text', e.data.wl.header_text);
//     document.documentElement.style.setProperty('--button_bg', e.data.wl.button_bg);
//     //alert(e.data.data.header_bg);
// }
//     }
//   }
  // send()
  // {
  //   const data = 'this is the msg'
  //   const frame = document.getElementById('iframe');    
  //   frame.contentWindow.postMessage(data, 'http://localhost:4228');
  //   console.log('data poseted')
  // }
  // HearMsg()
  //   {
  //     window.addEventListener('message',function(event){
  //       console.log('envent event event',event)
  //     })
  //   }

// async message()
//   {
//     window.addEventListener('message', event => {
//         if (event.origin.startsWith('http://localhost:4228')) { //check the origin of the data!
//           // The data was sent from your site. It sent with postMessage is stored in event.data:
//           console.log(event.data,'////////////////////');
//           console.log(event)
//         } else {
//           // The data was NOT sent from your site!
//           console.log(event.data,'```````````````````');
//           return;
//         }
//       });
//   }
  ngAfterViewInit(): void {
   
  }

  subscribeHome()
  {
    document.getElementById('ifraContainer2').style.visibility = 'visible';
    document.getElementsByClassName('daowork_container')[0].style.marginTop = '175px'
    
   
  }
  ngOnInit(): void {
    this.gotoTop();
    this.getTeams();
    this.checkIfLoaded();   
    
   
   
     setTimeout(()=>{
      this.subscribeHome();
     },12000)
     setTimeout(()=>{
      this.send();
      
     },13000)
     setTimeout(()=>{
      this.HearMsg()
     },14000)
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
  @HostListener('window:load')
  async ipop()
  {
    
      this.iframepopup(); 
       console.log('loaded')
       
  }
  @HostListener('window:message',['$event'])
  test()
  {
    this.send();
  }
  onMessage(event) {
    
    console.log('data data data',event)
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