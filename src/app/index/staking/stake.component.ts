//@ts-nocheck
import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { Moralis } from "moralis";
import { MoralisService } from "src/app/services/moralis.service";
import { MetamaskService } from "src/app/services/metamask.service";
import { Web3Service } from "src/app/services/web3.service";
import { EtherService } from "src/app/services/ether.service";
import { MatSnackBar } from "@angular/material/snack-bar";

import { NgxSpinnerService } from "ngx-spinner";
import { NftService } from "src/app/services/nft.service";
import { MetamaskComponent } from "src/app/dashboard/metamask/metamask.component";
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from "@angular/material/dialog";
import { Router } from "@angular/router";
import { arrayify } from "ethers/lib/utils";
import { CdkAccordion } from "@angular/cdk/accordion";
import { threadId } from "worker_threads";
import { Web3Service } from "src/app/services/web3.service";
@Component({
  selector: "app-stake",
  templateUrl: "./stake.component.html",
  styleUrls: ["./stake.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class StakeComponent implements OnInit {
  // constructor(private moralisservice:MoralisService) { }
  list: String[];
  tokenids = [];
  tokeniDs = [];
  loadFirstTime: boolean = true;
  isMetamask: boolean = true;
  unstakeId = "";

  public userOb = this.moralisservice.observeUser();

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private metaMaskService: MetamaskService,
    private moralisservice: MoralisService,
    private web3Service: Web3Service,
    private etherService: EtherService,
    private snack: MatSnackBar,
    private spinner: NgxSpinnerService
  ) {
    this.moralisservice
      .startMoralis()
      .subscribe(() => console.log("Started Moralis"));
  }

  STAKEbtn: any = null;
  UnSTAKEbtn: any = null;
  unstakebtn2: any = null;
  NFTbtn: any = null;
  loading2: any = null;
  loading4: any = null;
  loading3: any = null;
  approvebtn: any = null;
  Selectbtn: any = null;
  USelectbtn: any = null;
  tokenselected = [];
  TokenId: any = null;
  checkingNTP: any = null;
  checkingaprv: any = null;
  StakebtnControl: any = null;
  Deselectbtn: any = null;
  unstakingbtnControl: any = null;
  StakedNFTs: any = null;

  async select_all() {
    this.Deselectbtn = "show";
    this.Selectbtn = null;
    const allElements = Array.from(
      document.querySelectorAll("input[type=checkbox]")
    );
    const array = [];
    allElements.forEach((element) => {
      element.setAttribute("checked", "checked");
      // console.log('gggggggggggggggggg',element.getAttribute('value'))
      const value = parseInt(element.getAttribute("value"));
      array.push(value);
      this.tokenids = array;
    });
  }

  async deselect_all() {
    this.Selectbtn = "show";
    this.Deselectbtn = null;
    const allElements = Array.from(
      document.querySelectorAll("input[type=checkbox]")
    );
    allElements.forEach((element) => {
      element.removeAttribute("checked");
    });
  }
  show() {
    this.loading3 = "show";
  }

  async checkapproval() {
    this.etherService.checkapproval().then((data) => {
      //console.log("staking approval check ", data);
      if (data == true && this.checkingNTP === "true") {
        this.checkingaprv = "approved";
        // this.allNFT();
        const co = document.getElementById("stakingsection").style;
        co.backgroundColor = "#200028";
        co.pointerEvents = "auto";
        co.opacity = "1";
        this.NFTbtn = null;
        this.loading2 = "load";
        this.loading1 = "show";

        this.STAKEbtn = null;
        this.unstakingbtnControl = null;
        this.Selectbtn = null;
        this.approvebtn = null;
        if (this.StakebtnControl == "true") {
          this.STAKEbtn = "show";

          this.unstakingbtnControl = "show";
          this.estimateClaim();
          this.loading1 = null;
        }
        if (this.StakebtnControl == "false") {
          this.STAKEbtn = null;
          this.unstakingbtnControl = null;
        }

        this.refreshData();
      }

      return data;
    });
  }

  async interact() {
    this.etherService.setApproval().then((data) => {
      if (data) {
        const co = document.getElementById("stakingsection").style;
        co.backgroundColor = "#200028";
        co.pointerEvents = "auto";
        co.opacity = "1";
        this.NFTbtn = null;
        this.loading2 = null;
        this.loading1 = null;
        this.STAKEbtn = "show";
        this.unstakingbtnControl = "show";
        this.estimateClaim();
        this.approvebtn = null;
        this.refreshData();
      } else {
        this.STAKEbtn = null;
        this.unstakingbtnControl = null;
        this.NFTbtn = "show";
        this.loading2 = "show";
        this.approvebtn = null;
      }

      return data;
    });
  }

  async approveall() {
    const userAddress = localStorage.getItem("walletId");
    if (userAddress) {
      this.allNFT();

      const co = await document.getElementById("stakingsection").style;
      co.backgroundColor = "gray";
      co.pointerEvents = "none";
      co.opacity = "0.7";
    }
    if (!userAddress) {
      const con = await document.getElementById("stakingsection").style;
      con.backgroundColor = "#200028";
      con.pointerEvents = "auto";
      con.opacity = "1";
    }
  }
  allNFT() {
    this.moralisservice.getnfts().then((data) => {
      const array = [];

      for (var i = 0; i < data.length; i++) {
        const json = { data: data[i] };
        array.push(data[i]);
        this.list = array;
      }

      this.NFTbtn = "show";
      if (data) {
        this.loading1 = null;
        this.StakebtnControl = "true";
        this.checkingNTP = "true";
        this.refreshData();
      }
      this.checkapproval();
      if (data.length == 0) {
        this.NFTtoadx = "noNTP collection found";
        this.NFTbtn = null;
        this.STAKEbtn = null;
        this.unstakingbtnControl = null;
        this.checkingNTP = "false";
        this.loading1 = null;
      }

      if (data.length != 0 && this.checkingaprv == null) {
        this.approvebtn = "show";
      }
      if (!data) {
        this.loading1 = "show";
      }
    });
  }

  tokenID() {
    let terms = document.querySelectorAll("input[type='checkbox']");
    let termsValChecked = [];
    [].forEach.call(
      document.querySelectorAll('input[name="checklist"]:checked'),
      function (cb) {}
    );
  }

  async stake() {
    // const wallet = localStorage.getItem("walletId");

    // this.etherService.stakeMany(this.tokenids).then((data) => {
    //   //console.log("these are array of tokenids", this.tokenids);
    //   const stakeMany = data.methods
    //     .stakeMany(this.tokenids)
    //     .send({ from: wallet, value: 0 });
    //   //console.log("this is stake many ", stakeMany);
    //   if (data) {
    //     this.refreshData();
    //   }
    // });
    // this.refreshData();

    console.log('tokenids', this.tokenids)

    if (this.tokenids.length === 0) {
      this.snack.open("Please select at least one nft to stake", "X", {
        duration: 10000,
        panelClass: ["error-snackbar"],
        horizontalPosition: "center",
      });
      return false;
    }
    const userAddress = localStorage.getItem("walletId");

    if (userAddress) {
      this.spinner.show();
      const txn = await this.etherService.stakeMany(userAddress, this.tokenids);
      if (txn) {
        this.spinner.hide();
        this.snack.open("NFT has been staked sucessfully", "X", {
          duration: 10000,
          panelClass: ["success-order"],
          horizontalPosition: "center",
        });
        console.log("txn", txn);
        setTimeout(()=>{                          
          
          this.refreshData()
          this.allNFT()
      }, 11000)
        
        
        
      } else {
        this.spinner.hide();
        this.snack.open("Transaction has been cancelled or failed", "X", {
          duration: 10000,
          panelClass: ["error-snackbar"],
          horizontalPosition: "center",
        });
      }
    } else {
      this.snack.open("Please connect metamask manually", "X", {
        duration: 10000,
        panelClass: ["error-snackbar"],
        horizontalPosition: "center",
      });
    }
  }
  async unstakeAll() {
    //this.select_all();
    // const wallet = localStorage.getItem("walletId");
    // this.etherService.unstakeAll().then((data) => {
    //   //console.log("this is unstaking part", data);
    //   // if(data)
    //   // {
    //   //   const unstake = data.methods.unstakeAll().send({from:wallet,value:0})
    //   //   console.log('unstake',unstake)
    //   //   this.refreshData();
    //   //   return unstake
    //   // }
    //   return data;
    // });
    const userAddress = localStorage.getItem("walletId");

    if (userAddress) {
      this.spinner.show();
      const txn = await this.etherService.unstakeAll(userAddress);
      if (txn) {
        this.spinner.hide();
        this.refreshData();
        this.snack.open("All NFT has been unstaked sucessfully", "X", {
          duration: 10000,
          panelClass: ["success-order"],
          horizontalPosition: "center",
        });
        console.log("txn", txn);
        setTimeout(()=>{                          
          
          this.refreshData()
          this.stakingPAGE()
          this.allNFT()
      }, 11000)
        

      } else {
        this.spinner.hide();
        this.snack.open("Transaction has been cancelled or failed", "X", {
          duration: 4000,
          panelClass: ["error-snackbar"],
          horizontalPosition: "center",
        });
      }
    } else {
      this.snack.open("Please connect metamask manually", "X", {
        duration: 4000,
        panelClass: ["error-snackbar"],
        horizontalPosition: "center",
      });
    }
  }

  async estimateClaim() {
    this.etherService.estimateClaim().then((data) => {
      // console.log('estimated claim................',data)
      const claimbtndiv = document.getElementById("claimDiv");
      const claimBTN = document.getElementById("claimBTN");

      if (data == 0) {
        claimbtndiv.pointerEvents = "none !important";
        claimbtndiv.style.background = "gray";
        claimbtndiv.style.opacity = "0.5";
        if (claimBTN) {
          claimBTN.disabled = true;
          claimBTN.style.opacity = 0.5;
        }
      }
      if (data > 0) {
        claimbtndiv.pointerEvents = "auto";
        claimbtndiv.style.background = "none";
        claimbtndiv.style.opacity = "1";
        if (claimBTN) {
          claimBTN.disabled = false;
          claimBTN.style.opacity = "1";
        }
      }
    });
  }
  async claim() {
    const userAddress = localStorage.getItem("walletId");

    if (userAddress) {
      this.spinner.show();
      const claimAmt = await this.etherService.estimateClaim();
      console.log("claimAmt", claimAmt);
      if (claimAmt > 0) {
        const txn = await this.etherService.claim(userAddress);
        if (txn) {
          this.spinner.hide();
          this.snack.open("Reward has been claimed sucessfully", "X", {
            duration: 10000,
            panelClass: ["success-order"],
            horizontalPosition: "center",
          });
          setTimeout(()=>{                          
            location.reload()
            this.refreshData()
            
        }, 11000)
          
          console.log("txn", txn);
          
        } else {
          this.spinner.hide();
          this.snack.open("Transaction has been cancelled or failed", "X", {
            duration: 10000,
            panelClass: ["error-snackbar"],
            horizontalPosition: "center",
          });
        }
      } else {
        this.spinner.hide();
        this.snack.open("No rewards available to claim", "X", {
          duration: 10000,
          panelClass: ["error-snackbar"],
          horizontalPosition: "center",
        });
      }
    } else {
      this.snack.open("Please connect metamask manually", "X", {
        duration: 10000,
        panelClass: ["error-snackbar"],
        horizontalPosition: "center",
      });
    }

    // const userAddress = localStorage.getItem("walletId");
    // if (userAddress) {
    //   this.etherService.estimateClaim().then((data) => {
    //     console.log("this is estimated ccc", data);
    //     if (data == 0) {
    //       this.etherService.claim().then((data) => {
    //         const Callclaim = data.methods
    //           .claim()
    //           .send({ from: userAddress, value: 0 });
    //         console.log("calling claim ", Callclaim);
    //       });
    //     }
    //   });
    // }
  }
  async unstake() {
    const userAddress = localStorage.getItem("walletId");

    if (userAddress) {
      this.spinner.show();
      const txn = await this.etherService.unstake(userAddress, this.unstakeId);
      if (txn) {
        this.spinner.hide();
        this.snack.open("NFT has been unstaked sucessfully", "X", {
          duration: 10000,
          panelClass: ["success-order"],
          horizontalPosition: "center",
        });
        setTimeout(()=>{                          
          location.reload()
          this.refreshData()
          this.stakingPAGE()
      }, 11000)
        
      } else {
        this.spinner.hide();
        this.snack.open("Transaction has been cancelled or failed", "X", {
          duration: 10000,
          panelClass: ["error-snackbar"],
          horizontalPosition: "center",
          verticalPosition: "center",
        });
      }
    } else {
      this.snack.open("Please connect metamask manually", "X", {
        duration: 10000,
        panelClass: ["error-snackbar"],
        horizontalPosition: "center",
      });
    }

    // this.etherService.unstake(tokenids[0]).then((data) => {
    //   console.log("this is unstaking part", data);

    // const tokenids = this.tokeniDs;
    // console.log("this is the best", tokenids.length);
    // console.log("this is token id", tokenids);
    // for (var i = 0; i < tokenids.length; i++) {
    //   const unstake = data.methods
    //     .unstakePass(tokenids[i])
    //     .send({ from: wallet, value: 0 });
    //   console.log("unstaked", unstake);
    //   console.log(tokenids[i]);
    // }
    //this.refreshData();
    //});
  }
  async unstakingPAGE() {
    // this.etherService.unstakeAll().then(data =>{
    //   console.log('this is unstaking part',data)
    //   if(data)
    //   {
    //     this.refreshData();
    //   }
    // })
    const stakingPage = document.getElementById("stakingPage");
    const unstakingPage = document.getElementById("unstakingPage");
    const unstakingbtn = document.getElementById("unstakingpageBtn");
    const stakingbtn = document.getElementById("stakingpageBtn");
    stakingPage.style.display = "none";
    unstakingPage.style.display = "inline-block !important";
    unstakingPage.style.setProperty("display", "inline-block", "important");
    unstakingbtn.style.display = "none";
    stakingbtn.style.display = "block";
    this.loading1 = "show";
    console.log("fetching NFTS launched");

    this.StakedNFTs = await this.etherService.stakedNFTS();
    if (this.StakedNFTs.length > 0) {
      this.UnSTAKEbtn = "show";
      this.USelectbtn = "show";
      this.loading1 = null;
    }
    console.log("this is ssts", this.StakedNFTs);

    // this.etherService.stakedNFTS().then((data) => {
    //   console.log("this is ether js data", data);
    //   this.StakedNFTs = data;
    //   this.UnSTAKEbtn = "show";
    //   this.USelectbtn = "show";
    //   this.loading1 = null;
    //   console.log("this is ssts", this.StakedNFTs);
    // });
    // console.log("this is ssts", this.StakedNFTs);
  }
  async stakingPAGE() {
    const stakingPage = document.getElementById("stakingPage");
    const unstakingPage = document.getElementById("unstakingPage");
    const unstakingbtn = document.getElementById("unstakingpageBtn");
    const stakingbtn = document.getElementById("stakingpageBtn");
    stakingPage.style.display = "inline-block";
    unstakingPage.style.display = "none";
    unstakingbtn.style.display = "block";
    stakingbtn.style.display = "none";
  }
  async refreshData() {
    this.etherService.refreshData().then((data) => {
      console.log("refreshed data", data);
      console.log("refreshed data length ", data.length);
      if (data.length != 0) {
        this.unstakingbtnControl = "show";
        //this.estimateClaim();
      }
    });
  }
  dialogConfig = new MatDialogConfig();
  "dialogueReference": MatDialogRef<MetamaskComponent>;
  isConnected: any = null;
  loading1: any = null;
  NFTtoadx: any = null;
  checkuser: any = null;
  ngOnInit(): void {
    this.approveall();
    this.estimateClaim();
    this.web3Service.getMintedNFT()
    console.log(this.web3Service.getMintedNFT(),'ooooooooooooooooooooooooooo')
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
        this.loading1 = null;
        this.NFTbtn = null;
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
        this.loading1 = null;
        this.NFTbtn = null;
        this.checkIfUserWalletConnected();
      }
    });

    if (window.localStorage.getItem("logout") == "false") {
      this.checkIfUserWalletConnected();
    }
  }
  async checkIfUserWalletConnected() {
    this.isConnected = await this.metaMaskService.isMetaMaskConnected();
    if (!this.isConnected) {
      this.isMetamask = false;
      localStorage.setItem("logout", "true");
      localStorage.removeItem("walletId");
      this.loading1 = "null";
    } else {
      localStorage.setItem("walletId", this.isConnected);
      this.moralisservice
        .startMoralis()
        .subscribe(() => console.log("Started Moralis"));
      this.loading1 = "show";
      const co = await document.getElementById("stakingsection").style;
      co.backgroundColor = "gray";
      co.pointerEvents = "none";
      co.opacity = "0.7";
      this.allNFT();
    }
  }

  showMetamaskContent() {
    this.dialogueReference = this.dialog.open(MetamaskComponent, {
      panelClass: "custom-modalbox",
      disableClose: true,
      data: (this.dialogConfig.data = {
        metamaskContent: true,
      }),
    });
    this.dialogueReference.afterClosed().subscribe((result) => {});
  }

  changeScrollbar() {
    this.router.navigate(["/home"], { state: { routedFrom: "stake" } });
  }

  myCallbackFunction = (args: any): void => {
    this.unstakeId = args;
    if (args) {
      this.unstakebtn2 = "show";
    } else {
      this.unstakebtn2 = null;
    }
  };

  stakeCallbackFunction = (args: any): void => {
    if (this.tokenids.indexOf(args) === -1) {
      this.tokenids.push(args);
    } else {
      this.tokenids.splice(this.tokenids.indexOf(args), 1);
    }
  };
}
