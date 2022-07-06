import { GithubService } from 'src/app/services/github.service'; 
import { HttpClient } from '@angular/common/http';
import {
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


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomepageComponent implements OnInit {
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
  customData: any;
  pendingNFT: any = [];
  projectcount: number = 0;
  number: Number = 100;
  loadFirstTime: boolean = true;
  dialogConfig = new MatDialogConfig();
  'dialogueReference': MatDialogRef<MetamaskComponent>;
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
    private http: HttpClient
  ) {
    this.titleService.setTitle('Nova Dao');
  }
    ioToad:String[]  
    Captain:String[]
    Crypta:String[]
    parson:String[]
    Sheikh:String[]
  
  
  getUsers()
  {  
      this.githubservice.getData().subscribe(data => { 
       console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv',data)
        let respCaptain=this.http.get(data[0]['url'])
        respCaptain.subscribe(ResponseCaptain => {
          // console.log('Responce',Response)
          let bioCaptain=this.http.get(ResponseCaptain[0]['download_url'],{responseType:'text'})
          bioCaptain.subscribe(data => {
            var arrayC = []
          arrayC.push(data)
          this.Captain=arrayC
            console.log('bio',this.Captain)
          
          let metaCaptain=this.http.get(ResponseCaptain[1]['download_url'])
          metaCaptain.subscribe(data => {
            console.log('metaCaptain',data)
            
            arrayC.push(data)
            arrayC.push(ResponseCaptain[2]['download_url'])
            this.Captain=arrayC
            console.log('captain',this.Captain)
            
          });
        });
        });
        //////////////////////////////////////////////////////////////////////////////////////////////////////
      
       
        let respCrypta=this.http.get(data[1]['url'])
        respCrypta.subscribe(ResponseCrypta => {
          // console.log('Responce',Response)
          let bioCrypta=this.http.get(ResponseCrypta[0]['download_url'],{responseType:'text'})
          bioCrypta.subscribe(data => {
            var arrayC = []
          arrayC.push(data)
          this.Crypta=arrayC
            console.log('bio',this.Captain)
          
          let metaCrypta=this.http.get(ResponseCrypta[1]['download_url'])
          metaCrypta.subscribe(data => {
            console.log('metaCrypta',data)
            
            arrayC.push(data)
            
            this.Crypta=arrayC
            console.log('Ccccccccccccccccccccccccccccccccccc',this.Crypta)
            
          });
        });
        });
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        let respparson=this.http.get(data[2]['url'])
        respparson.subscribe(Responseparson => {
          // console.log('Responce',Response)
          let bioparson=this.http.get(Responseparson[0]['download_url'],{responseType:'text'})
          bioparson.subscribe(data => {
            var arrayC = []
          arrayC.push(data)
          this.parson=arrayC
            console.log('bio',this.Captain)
          
          let metaparson=this.http.get(Responseparson[1]['download_url'])
          metaparson.subscribe(data => {
            console.log('metaparson',data)
            
            arrayC.push(data)
            
            this.parson=arrayC
            console.log('ppppppppppppppppppppppppppppppppp',this.parson)
            
          });
        });
        });
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        let respSheikh=this.http.get(data[4]['url'])
        respSheikh.subscribe(ResponseSheikh => {
          // console.log('Responce',Response)
          let bioSheikh=this.http.get(ResponseSheikh[0]['download_url'],{responseType:'text'})
          bioSheikh.subscribe(data => {
            var arrayC = []
          arrayC.push(data)
          this.Sheikh=arrayC
            console.log('bio',this.Captain)
          
          let metaSheikh=this.http.get(ResponseSheikh[1]['download_url'])
          metaSheikh.subscribe(data => {
            console.log('metaSheikh',data)
            
            arrayC.push(data)
            
            this.Sheikh=arrayC
            console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',this.Sheikh)
            
          });
        });
        });
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        let respToad=this.http.get(data[5]['url'])
        respToad.subscribe(Response => {
          // console.log('ResponseToad:',Response)
          
//Getting Bio

           let bioToad=this.http.get(Response[0]['download_url'],{responseType:'text'})
        bioToad.subscribe(data => {
          // console.log('BioToad:',data)
          var array = []
          array.push(data)
          this.ioToad=array
            
            // console.log('aaaaaaaaaaaaaaaaaaaaa',this.ioToad)
          
//Getting Meta
          let metaToad=this.http.get(Response[1]['download_url'])
          metaToad.subscribe(data => {
            // console.log('Meta:',data)
            // console.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT",data)
            array.push(data)
          
            array.push(Response[2]['download_url'])
          
           this.ioToad=array
            // console.log('xxxxxxxxxxxxxxxxxxxxxx',this.ioToad)
            
          });      
          //Getting Image           
          // let image=this.http.get(Response[2]['download_url'])
          // image.subscribe(data => {
          //   console.log('Img',data)
          //   array.push(data)

          
          //  this.ioToad=array
           
            
          // });                 
          
        });


        });


      },
      err =>console.log(err),
      () => console.log('complete')
      )
      //get Image
      
  }

  ngOnInit(): void {
    this.gotoTop();
    this.getUsers();
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
      console.log('The dialog was closed');
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
