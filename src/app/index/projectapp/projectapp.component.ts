
  //@ts-nocheck
  import { style } from '@angular/animations';
  import { DIR_DOCUMENT } from '@angular/cdk/bidi';
  import { Component, OnInit } from '@angular/core';
  import { AngularFireModule } from '@angular/fire/compat';
  import { AngularFireDatabase } from '@angular/fire/compat/database';
  import { AngularFireStorage } from '@angular/fire/compat/storage';
  import { MatSnackBar } from "@angular/material/snack-bar";
  import { NgxSpinnerService } from 'ngx-spinner';
  import { environment } from 'src/environments/environment';
  import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
  import { PdfViewerModule } from 'ng2-pdf-viewer';
  import { Console } from 'console';
  // import { Observable,finalize  } from 'rxjs';
  import {finalize,catchError,tap} from 'rxjs/operators';
  import { DocumentRef } from 'ngx-owl-carousel-o/lib/services/document-ref.service';
  import {FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
  import { threadId } from 'worker_threads';
  import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
  import { ReadVarExpr } from '@angular/compiler';
  import { MetamaskComponent } from "src/app/dashboard/metamask/metamask.component";
  import { MetamaskService } from "src/app/services/metamask.service";
  import {
    MatDialog,
    MatDialogConfig,
    MatDialogRef,
  } from "@angular/material/dialog";



  @Component({
    selector: 'app-projectapp',
    templateUrl: './projectapp.component.html',
    styleUrls: ['./projectapp.component.scss']
  })
  export class ProjectappComponent implements OnInit {
    // name: string="";
    // Lname:string="";
    // email:string="";
    // Describe:string="";
    // advantages:string="";
    // pick:string="";
    // IP:string="";
    // how:string="";
    public file: string = null;  
    public data: any = null; 
    chevalue : string = null;

    successArray = [];
    failuresArray = [];

    NFbtn: any = null;
    Slist: any = null;
    Flist:any = null;
    ProjectName:string=null;
    
    isChecked:string="";

    // success1:string="";
    // success2:string="";
    // success3:string="";

    // failure1:string="";
    // failure2:string="";
    // failure3:string="";


    ProjectDes1:string=null;
    ProjectDes2:string=null;
    
    AboutTeam1:string=null;
    AboutTeam2:string="";
    AboutTeam3:string="";
    AboutTeam4:string="";
    AboutTeam5:string="";
    
    TeamSocialLink12ndinput:string=null;
    TeamSocialLink22ndinput:string="";
    TeamSocialLink32ndinput:string="";
    TeamSocialLink42ndinput:string="";
    TeamSocialLink52ndinput:string=""; 
    
    Designation1:string=null;
    Designation2:string="";
    Designation3:string="";
    Designation4:string="";
    Designation5:string="";


    
    TeamSocialLink1:string=null;
    TeamSocialLink2:string="";
    TeamSocialLink3:string="";
    TeamSocialLink4:string="";
    TeamSocialLink5:string=""; 
    
    TeamName1:string=null;
    TeamName2:string="";
    TeamName3:string="";
    TeamName4:string="";
    TeamName5:string="";

    // src:string="";
    imglink:string="";
    imgL:string="";
    su1:string="";
    s1:string="";

    requiredForm: FormGroup;
    loading2: any = null;
    loading4: any = null;
    loading3: any = null;
    loading1: any = null;
    isConnected:any =null;

    NovaAmount:string=null;
    stringURL:string=null;
    profileImg:string=null;
    URL = [];
    fileH = [];
    isConnected :any = null;

    loadFirstTime: boolean = true;
    dialogConfig = new MatDialogConfig();
    "dialogueReference": MatDialogRef<MetamaskComponent>;


    constructor(private db: AngularFireDatabase,
      private snack: MatSnackBar,
      private spinner: NgxSpinnerService,
      private storage: AngularFireStorage,
      private fb:FormBuilder,
      private metaMaskService: MetamaskService,
      public dialog: MatDialog
      ) { this.myForm()
          console.log('55555555555555555555',this.myForm())
      }
      myForm() {
          this.requiredForm = this.fb.group({
          name: ['', Validators.required ],
          DescriptionOne:['',Validators.required],
          DescriptionTwo:['',Validators.required],
          TeamNameZero:['',Validators.required],
          LinkZero:['',Validators.required],
          DesignationZero:['',Validators.required],
          AboutZero:['',Validators.required],
          
          TeamNameOne:['',Validators.required],
          LinkOne:['',Validators.required],
          DesignationOne:['',Validators.required],
          AboutOne:['',Validators.required],

          TeamNameTwo:['',Validators.required],
          LinkTwo:['',Validators.required],
          DesignationTwo:['',Validators.required],
          AboutTwo:['',Validators.required],


          TeamNameThree:['',Validators.required],
          LinkThree:['',Validators.required],
          DesignationThree:['',Validators.required],
          AboutThree:['',Validators.required] ,

          TeamNameFour:['',Validators.required],
          LinkFour:['',Validators.required],
          DesignationFour:['',Validators.required],
          AboutFour:['',Validators.required],

          AmountNov:['',Validators.required],
          Link2ndZero:['',Validators.nullValidator],
          Link2ndOne:['',Validators.nullValidator],
          Link2ndTwo:['',Validators.nullValidator],
          Link2ndThree:['',Validators.nullValidator],
          Link2ndFour:['',Validators.nullValidator],

          pdfView:['',Validators.nullValidator],
          c1:['',Validators.nullValidator],
          c2:['',Validators.nullValidator],
          c3:['',Validators.nullValidator],
          c4:['',Validators.nullValidator],

          failuerAll:['',Validators.nullValidator],
          failuerAll:['',Validators.nullValidator],


          });
      }
    init()
  {
    AngularFireModule.initializeApp(environment.firebaseConfig)
    console.log('initialized')
  }

  test2() 
  {
    this.success();
      this.failures();
  console.log('/////////////////////////\\\\\\\\\\\\\\\\',this.successArray[0])
  console.log('/////////////////////////\\\\\\\\\\\\\\\\',this.successArray[1])
  console.log('/////////////////////////\\\\\\\\\\\\\\\\',this.successArray[2])

    if(this.successArray[0] == 'Success 1' || this.successArray[1] == 'Success 2' || this.successArray[2] == 'Success 3' 
    ||this.successArray[0] == '' || this.successArray[1] == '' || this.successArray[2] == '' )
    {
      this.List= "show";
    }
    else
    {
      console.log('oneo one one')
      this.List = null;
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

  async checkck()
  {
    const userAddress = localStorage.getItem("walletId");
    console.log('this is project app useraddress checking',userAddress)
  }
    async sub()
    {
      
      console.log(this.fileH,']]]]]]]]]]]]]]]]ll')
      const ref = this.storage.ref(this.filename)
      let urll = ""
      const path = `test/${Date.now()}_${this.filename}`;
      console.log('this is string URL',this.stringURL)
      console.log('this is url',this.URL[0])
      const userAddress = localStorage.getItem("walletId");
    //   const filePath = this.filename;
    // const storageRef = this.storage.ref(filePath);
    // const uploadTask = this.storage.upload(filePath, this.fileH);
      let array = []
      // await uploadTask.snapshotChanges().pipe(
      //   finalize(() => {
      //     ref.getDownloadURL().subscribe((url) => {
      //       // this.url = url;
      //       // this.fileService.insertImageDetails(this.id,this.url);
      //       // alert('Upload Successful');
      //       this.URL.push(url)
      //       urll = url
      //       array.push({url:url})
      //       console.log(url,'////////////////////////////////')
      //       console.log(this.URL[0],'uploaded successfuly')
      //     })
      //   })
      // ).subscribe()
      // // if (array.length > 0) {
      //   console.log('this is array',await array[0].url)
      // }
      // const data = await array
      //   console.log(await array.length,'thisss is uploaded url')
        
      this.success();
      this.failures();
      console.log('project name',this.ProjectName)
      console.log('project name',this.ProjectDes1)
      console.log('project name',this.ProjectDes2)
      console.log('project name',this.TeamName1)
      console.log('project name',this.TeamSocialLink1)
      console.log('project name',this.Designation1)
      console.log('project name',this.NovaAmount)
      if(this.successArray[0] == 'Success 1' || this.successArray[1] == 'Success 2' || this.successArray[2] == 'Success 3' 
      ||this.successArray[0] == '' || this.successArray[1] == '' || this.successArray[2] == '' )
      {
        this.Slist= "show";
      
      }
      else
      {
        console.log('oneo one one')
        this.Slist = null;
        
      }
    if(this.failuresArray[0] == 'Failure 1' || this.failuresArray[1] == 'Failure 2' || this.failuresArray[2] == 'Failure 1 3' 
      ||this.failuresArray[0] == '' || this.failuresArray[1] == '' || this.failuresArray[2] == '')
      {
        this.Flist = "show"
        
        
      }
      else
      {
        console.log('oneo one one')
        
        this.Flist = null;
      }
    
      // console.log(this.chevalue,'this is checkvalue')
      // const faded = document.getElementsByClassName('cdk-overlay-container')[0]
      // faded.style.visibility = 'visible'
      // console.log('div dis',faded)
      // console.log(faded,'faded')

      if(this.ProjectName == null || this.ProjectDes1 == null || this.ProjectDes2 == null || this.TeamName1 == null 
      || this.TeamSocialLink1 == null || this.Designation1 == null || this.NovaAmount == null)
      {
        this.snack.open("Please fill all the reqiured fields", "X", {
          duration: 10000,
          panelClass: ["error-snackbar"],
          horizontalPosition: "center",
        });
      
        console.log('666666666666666666',this.requiredForm)
        console.log('777777777777777777',this.requiredForm.status)
        console.log('888888888888888888888',this.requiredForm.controls.AboutFour.touched = true)
        console.log('99999999999999999999999',this.requiredForm)
        for (const key in this.requiredForm.controls){
          if(this.requiredForm.controls.hasOwnProperty(key)){
            console.log(`${key} : ${this.requiredForm.controls[key].status}`)
            if(this.requiredForm.controls[key].status == 'INVALID')
            {
              console.log('invalid')
              this.requiredForm.controls[key].touched = true
            }
          }
        }
        if(this.chevalue == null)
        {
            this.snack.open("Please Check at least one checkbox", "X", {
                duration: 10000,
                panelClass: ["error-snackbar"],
                horizontalPosition: "center",
              });
              
        }
      
      }
      // if(this.ProjectName != "" || this.ProjectDes1 && this.ProjectDes2 !="")
      else    {
        console.log('submission triggered')
        const us = localStorage.getItem('walletId').toString();
        const t = "this";
        const ref = this.db.list("Projects")
        const teamone = []
        const teamtwo = []
        const teamthree = []
        const four = []
        const five = []
        const success =[]
        const failure =[]

        // success.push({Success1:this.success1,Success2:this.success2,Success3:this.success3})
        failure.push({Failure1:this.failure1,Failure2:this.failure2,Failure3:this.failure3})
        teamone.push({TeamMeber:this.TeamName1,SocialLink:this.TeamSocialLink1,SocialLink2:this.TeamSocialLink12ndinput,Designation:this.Designation1,About:this.AboutTeam1})
        teamtwo.push({TeamMeber:this.TeamName2,SocialLink:this.TeamSocialLink2,SocialLink2:this.TeamSocialLink22ndinput,Designation:this.Designation2,About:this.AboutTeam2})
        teamthree.push({TeamMeber:this.TeamName3,SocialLink:this.TeamSocialLink3,SocialLink2:this.TeamSocialLink32ndinput,Designation:this.Designation3,About:this.AboutTeam3})
        four.push({TeamMeber:this.TeamName4,SocialLink:this.TeamSocialLink4,SocialLink2:this.TeamSocialLink42ndinput,Designation:this.Designation4,About:this.AboutTeam4})
        five.push({TeamMeber:this.TeamName5,SocialLink:this.TeamSocialLink5,SocialLink2:this.TeamSocialLink52ndinput,Designation:this.Designation5,About:this.AboutTeam5})
        const teamjson= {teamone,teamtwo,teamthree,four,five}
        this.spinner.show();
        const user = localStorage.getItem('walletId').toString();
        
        ref.push({UserAddress:userAddress,ProjectName:this.ProjectName,ProjectDescription:this.ProjectDes1,
          ProjectDescription2:this.ProjectDes2,TeamMembers:teamjson,SlideDeck:this.stringURL,
          GeneratedValue:this.chevalue,Failure:this.failuresArray,success:this.successArray,
          NovaAmount:this.NovaAmount,ProfileImage:this.profileImg,upVote:0,DownVote:0,Time:Date.now()
          
        }).then((resp)=>
        {
          
          const userAddress = localStorage.getItem('walletId')
          this.spinner.hide();
          console.log('fire responce ',resp.key)
          this.snack.open("Succesfuly submited", "X", {
            duration: 10000,
            panelClass: ["success-order"],
            horizontalPosition: "center",
          });
          var frm = document.getElementsByName('appForm')[0];
          frm.reset()
        }).catch((error)=>{
        //   console.log('this is the error',error)
        //   const cdk = document.getElementsByClassName("cdk-overlay-container")[0]
        // cdk.style.display = 'block'
          this.snack.open(error, "X", {
            duration: 10000,
            panelClass: ["error-snackbar"],
            horizontalPosition: "center",
          });
        })        
      }
        }
    test()
    {
      const faded = document.getElementsByClassName('cdk-overlay-container')[0]
      faded.style.visibility = 'visible'
        console.log(faded,'bbbbbbbbbbbbbbbbbbbbbbbbb')
          this.snack.open("error", "X", {
            duration: 1000000,
            panelClass: ["error-snackbar"],
            horizontalPosition: "center",
          });
          console.log('test one')
    }
  saveData()
  {
    if(this.name != "" && this.email != "" && this.pick !="" && this.Lname != "")
    {
      const ref = this.db.list("Projects")
      ref.push({name:this.name,leadname:this.Lname,describe:this.Describe,advantages:this.advantages,whypick:this.pick,otherIdeas:this.IP,"how did you hear":this.how}).then((resp)=>
      {
        console.log('fire responce ',resp)
        this.snack.open("Succesfuly submited", "X", {
          duration: 10000,
          panelClass: ["success-order"],
          horizontalPosition: "center",
        }); 
      }).catch((error)=>{
        console.log('this is the error',error)
        this.snack.open(error, "X", {
          duration: 10000,
          panelClass: ["error-snackbar"],
          horizontalPosition: "center",
        });
      }) 
    }
    if(this.name == "" || this.email == "" || this.pick =="" || this.Lname == "")
    {
      this.snack.open('Please fill all the required fields', "X", {
        duration: 4000,
        panelClass: ["error-snackbar"],
        horizontalPosition: "center",
      });
    }
  if(this.name == "")
  {
    document.getElementById('input').style.borderColor="red"
  }
  else
  {
    document.getElementById('input').style.borderColor="transparent"
  }
    if(this.Lname == "")
  {
    document.getElementById('Lname').style.borderColor="red"
  }
  else
  {
    document.getElementById('input').style.borderColor="transparent"
  }
    if(this.email == "")
  {
    document.getElementById('email').style.borderColor="red"
  }
  else
  {
    document.getElementById('input').style.borderColor="transparent"
  }
  if(this.pick == "")
  {
    document.getElementById('pick').style.borderColor="red"
  }
  else
  {
    document.getElementById('input').style.borderColor="transparent"
  } 
  }

  public onFileChange(event: any) {
    this.file = null;
    
    let files: File[] = event.target.files;
    this.fileH = files
    console.log('vvvvvvvvvvvvvvvvvvvv',this.fileH)
    if (files.length > 0) {
      this.file = files[0];
      console.log('this is ',this.fileH)
      this.filename = this.file.name;
      

    //   const image = event.target.files[0]
    // console.log('this is the image',image)


    // const filePath = image.name;
    // const storageRef = this.storage.ref(filePath);
    
    // const uploadTask = this.storage.upload(filePath, image);

      
      
    // uploadTask.snapshotChanges().pipe(
    //   finalize(() => {
    //     storageRef.getDownloadURL().subscribe((url) => {
    //       // this.url = url;
    //       // this.fileService.insertImageDetails(this.id,this.url);
    //       // alert('Upload Successful');
    //       console.log(url,'////////////////////////////////')
    //       console.log('uploaded successfuly')
    //       // this.stringURL = url
    //       // this.URL.push(url)
    //     })
    //   })
    // ).subscribe()
  




      if (typeof (FileReader) !== 'undefined') {
        let reader = new FileReader();

        reader.onloadend = (e: any) => {
          if (this.file.type === "application/pdf") {
            this.isPdf = true;
            this.data = e.target.result;
          } else {
            this.isPdf = false;
          }
          // this.handleAttachmentsInOfflineMode();
        };

        // reader.readAsArrayBuffer(this.file);
        reader.readAsDataURL(this.file);

    const image = event.target.files[0]
        const filePath = image.name;
    const storageRef = this.storage.ref(filePath);
    
    const uploadTask = this.storage.upload(filePath, image);

      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe((url) => {
            // this.url = url;
            // this.fileService.insertImageDetails(this.id,this.url);
            // alert('Upload Successful');
            console.log(url,'////////////////////////////////')
            console.log('uploaded successfuly')
            this.stringURL = url
            // this.stringURL = url
            // this.URL.push(url)
          })
        })
      ).subscribe()
    
      }

      if (!this.offline && this.file && this.file.size / 1024 / 1024 > 10) {
        // this.isUploadAllowed = false;
        this.addPlainWarningMessage("File size larger than allowed size of 10MB");
      } else {
        // this.isUploadAllowed = true;
      }
      // this.updateFileControlState();

    } else {
      this.url = null;
      this.pdfContent = null;
      this.content = null;
      // this.isUploadAllowed = false;
    }
  }
  public async ProfileImg(e)
  {
    const image = e.target.files[0]
    console.log('this is the image',image)

    // const storageRef = this.storage.ref();
    // const file = storageRef.child(image.name)
    // await file.put(image)

    const filePath = image.name;
    const storageRef = this.storage.ref(filePath);
    
    const uploadTask = this.storage.upload(filePath, image);

      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe((url) => {
            // this.url = url;
            // this.fileService.insertImageDetails(this.id,this.url);
            // alert('Upload Successful');
            console.log(url,'////////////////////////////////')
            console.log('uploaded successfuly')
            this.profileImg = url
            // this.stringURL = url
            // this.URL.push(url)
          })
        })
      ).subscribe()
    

    const reader = new FileReader()
    reader.read

    
  }
  public onTextChangeIn(event: any)
  {
      var myInputElement = document.getElementById("myWordsToCountUp");
      var wordsIn = myInputElement.value;

      console.log('this is data',faded)

    
      console.log('vvvvvvvvvvvvvvvv')
      var haveByNowIn = 1;
      for (var i = 0; i < wordsIn.length; i++) {
          if (wordsIn[i] == " ") {
              haveByNowIn += 1;
          }
      }
      document.getElementById("wordcountIn").innerHTML = haveByNowIn;
  }

  public onTextChange(event: any) {
      console.log(event.target.value,'value')
      console.log(event.target,'target')
      console.log(event,'event')
      var myTextareaElement = document.getElementById("myWordsToCount");
      var words = myTextareaElement.value;

      // console.log(words,'99999999')
      var haveByNow = 1;
      for (var i = 0; i < words.length; i++) {
          if (words[i] == " ") {
              haveByNow += 1;
          }
      }
      document.getElementById("wordcount").innerHTML = haveByNow;

  }
  team1()
  {
    document.getElementById('one').style.display = "flex"
    document.getElementById('one').style.flexDirection = "column"
    document.getElementById('firstteambtn').style.display = "none"
    console.log('hi')
  }
  team2()
  {
    document.getElementById('two').style.display = "flex"
    document.getElementById('two').style.flexDirection = "column"
    document.getElementById('F1teambtn').style.display = "none"
  }
  team3()
  {
    document.getElementById('three').style.display = "flex"
    document.getElementById('three').style.flexDirection = "column"
    document.getElementById('F2teambtn').style.display = "none"
  }
  team4()
  {
    document.getElementById('four').style.display = "flex"
    document.getElementById('four').style.flexDirection = "column"
    document.getElementById('F3teambtn').style.display = "none"
  }
  success()
  {
    const Data = document.getElementById('suc').getElementsByTagName('li');
    console.log(Data.length)
    let array = []
    for(var i=0;i<Data.length;i++)
    {
      
      array.push(Data[i].innerHTML)
      let j = {success:Data[i]}
      console.log(j)
      console.log(array)
      // array.push({su:Data[i].innerHTML})
      // var ar = []
      // ar.push(array)
      // console.log(ar)
    }
    console.log(array,'hhhh')
    this.successArray = array
  } 
  failures()
  {
    const Data = document.getElementById('fail').getElementsByTagName('li')
    const array = []
    for(var i = 0; i < Data.length; i++)
    {
      array.push(Data[i].innerHTML)
    }
    console.log(array)
    this.failuresArray = array
  }
  // click()
  // {
  //   const click = document.getElementById('click')
  //   const target = document.getElementById('target')
  //   const image_input = document.querySelector("#image-input");
  
  //   image_input.addEventListener("change", function() {
  //     const reader = new FileReader();
  //     reader.addEventListener("load", () => {
  //       const uploaded_image = reader.result;
  //       console.log('llllllll',uploaded_image)
        
  //       // console.log('imgggggggggggg',this.imgL)
  //       // document.querySelector("#click").style.backgroundImage = `url(${uploaded_image })`;
  //       this.NFbtn = "show"
  //       this.src = uploaded_image
        
      
      
  //     });
  //     reader.readAsDataURL(this.files[0]);
  //     console.log('beti demena ',this.src)
  //   });
    
  // }

    ngOnInit(): void {
      this.init();
      // this.click();
      // this.checkiIfLoaded();

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
       
        this.not = null;

        const userAddress = localStorage.getItem('walletId')

      
       
      
        
      }
    }
  
   






    Data()
    {
      const data = 'hi'
      if(data === 'hi')
      {
      this.snack.open("Succesfuly submited", "X", {
        duration: 10000,
        panelClass: ["success-order"],
        horizontalPosition: "center",
      });
    }
    
  }
  checkCheckBoxvalue(event){
    console.log(event.target.checked,'77777777')
    console.log(event.target,'jjjj')
    console.log(event,'event event event')
    // console.log(event.target.value)
    // console.log(event.value)
    if(event.target.checked == true){
    this.chevalue = event.target.value
    console.log(this.chevalue,'with value')
    }
    if(event.target.checked == false)
    {
      this.chevalue = null ;
      console.log(this.chevalue,'this is null')
    }
    // if(event.target.checked === "false")
    // {
    //   this.chevalue = null
    //   console.log(this.chevalue,'null value')
    // }
  //  console.log('this is checkvalue',this.chevalue)
  console.log('////////////',this.chevalue)
    $('.checkoption').click(function() {

      console.log('gggggggggggggggggg',cdk)
      $('.checkoption').not(this).prop('checked', false);
  });
  }  
  checkiIfLoaded()
  {
    window.addEventListener('load',function(event){
      const faded = document.getElementsByClassName('cdk-overlay-container')[0]
      faded.style.visibility = 'visible'
      console.log('thanks god and his mother and everyone')
    })
  }
  // @HostListener('window:load')
  // test2()
  // {
  //   console.log('this popup component')
  //   const data = document.getElementsByClassName('cdk-overlay-container')[0]
  //     data.style.visibility = 'visible'
  // }

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


  }
