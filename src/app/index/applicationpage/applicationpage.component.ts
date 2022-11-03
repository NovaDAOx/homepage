//@ts-nocheck
import { style } from '@angular/animations';
import { DIR_DOCUMENT } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatSnackBar } from "@angular/material/snack-bar";
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { Console } from 'console';
import { DocumentRef } from 'ngx-owl-carousel-o/lib/services/document-ref.service';
import {FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-applicationpage',
  templateUrl: './applicationpage.component.html',
  styleUrls: ['./applicationpage.component.scss']
})
export class ApplicationpageComponent implements OnInit {
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
  ProjectName:string="";
  
  isChecked:string="";

  // success1:string="";
  // success2:string="";
  // success3:string="";

  // failure1:string="";
  // failure2:string="";
  // failure3:string="";


  ProjectDes1:string="";
  ProjectDes2:string="";
  
  AboutTeam1:string="";
  AboutTeam2:string="";
  AboutTeam3:string="";
  AboutTeam4:string="";
  AboutTeam5:string="";
  
  TeamSocialLink12ndinput:string="";
  TeamSocialLink22ndinput:string="";
  TeamSocialLink32ndinput:string="";
  TeamSocialLink42ndinput:string="";
  TeamSocialLink52ndinput:string=""; 
  
  Designation1:string="";
  Designation2:string="";
  Designation3:string="";
  Designation4:string="";
  Designation5:string="";


  
  TeamSocialLink1:string="";
  TeamSocialLink2:string="";
  TeamSocialLink3:string="";
  TeamSocialLink4:string="";
  TeamSocialLink5:string=""; 
  
  TeamName1:string="";
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

  NovaAmount:string="";

  constructor(private db: AngularFireDatabase,
    private snack: MatSnackBar,
    private spinner: NgxSpinnerService,
    private fb:FormBuilder
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

        AmountNov:['',Validators.required]

        });
     }
  init()
{
  AngularFireModule.initializeApp(environment.firebaseConfig)
  console.log('initialized')
}
test2() 
{
  console.log('project name',this.ProjectName)
  console.log('project name',this.ProjectDes1)
  console.log('project name',this.ProjectDes2)
  console.log('project name',this.TeamName1)
  console.log('project name',this.TeamSocialLink1)
  console.log('project name',this.Designation1)
  console.log('project name',this.NovaAmount)

}
   sub()
   {
    this.success();
    this.failures();
    console.log(this.chevalue,'this is checkvalue')
    const faded = document.getElementsByClassName('cdk-overlay-container')[0]
    faded.style.visibility = 'visible'
    console.log('div dis',faded)
    console.log(faded,'faded')

    // console.log('project name',this.ProjectName)
    // console.log('project name',this.ProjectDes1)
    // console.log('project name',this.ProjectDes2)
    // console.log('project name',this.TeamName1)
    // console.log('project name',this.TeamSocialLink1)
    // console.log('project name',this.Designation1)
    // console.log('project name',this.NovaAmount)

    if(this.ProjectName == "" || this.ProjectDes1 || this.ProjectDes2 =="" || this.TeamName1 
    || this.TeamSocialLink1 || this.Designation1 == "" || this.NovaAmount == "")
    {
      this.snack.open("Please fill all the reqiured fields", "X", {
        duration: 10000,
        panelClass: ["error-snackbar"],
        horizontalPosition: "center",
      });
      console.log('666666666666666666',this.requiredForm)
      console.log('777777777777777777',this.requiredForm.status)
      console.log('888888888888888888888',this.requiredForm.controls.AboutFour.touched = true)
      console.log('99999999999999999999999',this.requiredForm.controls)
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
            return false
      }
      return false
    }
    // if(this.ProjectName != "" || this.ProjectDes1 && this.ProjectDes2 !="")
    else
    {
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
      ref.push({ProjectName:this.ProjectName,ProjectDescription:this.ProjectDes1,
        ProjectDescription2:this.ProjectDes2,TeamMembers:teamjson,SlideDeck:this.data,
        GeneratedValue:this.chevalue,Failure:this.failuresArray,success:this.successArray,NovaAmount:this.NovaAmount
        
      }).then((resp)=>
      {
        // const cdk = document.getElementsByClassName("cdk-overlay-container")[0]
        // cdk.style.display = 'block'
        this.spinner.hide();
        console.log('fire responce ',resp)
        this.snack.open("Succesfuly submited", "X", {
          duration: 10000,
          panelClass: ["success-order"],
          horizontalPosition: "center",
        });
        
        
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
  if (files.length > 0) {
    this.file = files[0];
    console.log('this is ',this.file)
    this.filename = this.file.name;
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
    }

    if (!this.offline && this.file && this.file.size / 1024 / 1024 > 10) {
      // this.isUploadAllowed = false;
      this.addPlainWarningMessage("File size larger than allowed size of 10MB");
    } else {
      // this.isUploadAllowed = true;
    }
    // this.updateFileControlState();

  } else {
    
    this.pdfContent = null;
    this.content = null;
    // this.isUploadAllowed = false;
  }
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
    console.log('thanks god and his mothers and everyone')
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
