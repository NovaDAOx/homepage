import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { PledgingService } from 'src/app/services/pledging.service';
@Component({
  selector: 'app-allprojects',
  templateUrl: './allprojects.component.html',
  styleUrls: ['./allprojects.component.scss']
})
export class AllprojectsComponent implements OnInit {
  allPro = []
  prop = []
  name = ""
  pledgePro = " "
  Team =[]
  constructor(private db:FirebaseService,private pledgingservice:PledgingService) { }

  async allProjects()
  {
    const data =await this.db.getCreatedGrant();
    this.allPro = data
    console.log('this is data',data)
    console.log('data length',data.length)
    const progress = document.getElementsByClassName('matPb')
    console.log('progress bar progress bar',progress)
   const getDoc =  document.getElementsByName('SN')
   console.log('')
  
   for(var i=0; i < 2 ; i++)
   {
    const SN =  document.getElementsByName('SN')[i].childNodes[0].textContent
    console.log('THIS THIS THIS THSI THSI',SN)
    const data = this.pledgingservice.fundingNeeded(1)
    console.log('this is funding needed from the all projects page',data)
   }
   console.log('progress bar progress bar progress bar',this.pledgePro)
    
  }
  async changeProgressBar(args:any)
  {
    console.log(args.path[3].children[5].childNodes[0].innerText)
    console.log('progress bar progress bar progress bar',args.path[0].innerText)
    var event = args.path[3].children[5].childNodes[0].innerText
    const pledgeV = parseInt(args.path[0].innerText)
    const requiredAmt = parseInt(args.path[3].children[4].childNodes[1].innerText)
    console.log(requiredAmt,'required amount ',requiredAmt)
    console.log(args)
    var final = (pledgeV / 100)* requiredAmt
    final = final + event
    console.log(final,'this is final percentage for the progress bar',final)
    args.path[3].childNodes[5].childNodes[0].innerText = final
    console.log(event,'event event event')
  }
  toggle()
  {
    document.getElementById('downAllP').classList.toggle('showw')
    
  }
  backAppTwo()
  {
    const landingpage = document.getElementById('allLand');
    const proposalPage = document.getElementById('Data');

    landingpage.style.display = "block";
    proposalPage.style.display = 'none';

  }
  proposal = (event): void =>
  {
    // this.propzls();
    // document.getElementsByClassName('hoho')[0].style.display = "flex";
    const arry = <any>[]
    // console.log(event.path[2].children[1].children[3].lastChild.childNodes[0].data,'ppppppppppppppppppppppp')
    arry.push({name:event.path[2].lastChild.children[1].innerHTML,
      Description:event.path[2].lastChild.children[2].innerHTML,
      Amount:event.path[2].lastChild.children[4].children[1].innerText,
      src:event.path[2].firstChild.firstChild.currentSrc,
      Key:event.path[2].lastChild.children[3].firstChild.data,
      DescriptionT:event.path[2].lastChild.children[3].childNodes[1].innerHTML
    }
      )
      // console.log('++++++++++++++++++++++++',event.path[2].children[1].children[3].children[3].childNodes[0].innerHTML)
      const Array = arry.map(Item => {
        console.log('item',Item)
        return Item
      })
      this.prop = Array
      const userAddress = event.path[2].lastChild.children[3].firstChild.data
      this.db.getTeam(userAddress);
      this.Team = this.db.getTeam(userAddress)
      const  page = document.getElementById('allLand')
      page.style.display ="none"
    console.log(',,,,,,,,,,,,,,,,,,,,',event)      
    console.log(',,,,,,,,,',event.path[2].lastChild.children[1].innerHTML)
    console.log(',,,,,,,,,',event.path[2].lastChild.children[2].innerHTML)
    console.log(',,,,,,,,,',event.path[2].lastChild.children[4].children[1].innerText)
    console.log(',,,,,',event.path[2].firstChild.firstChild.currentSrc)
    console.log(',,,,,,,,',event.path[2].lastChild.children[3].firstChild.data)
    console.log(',,,,,,,,,,,,',event.path[2].lastChild.children[3].childNodes[1].innerHTML)
    }

  ngOnInit(): void {
    this.allProjects();
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
        
        x = rows[i].getElementsByTagName('DIV')[0].getElementsByTagName('DIV')[1].getElementsByTagName('P')[1]
        console.log('dd',x.innerHTML)    
        console.log('testtttttttttt',rows[i + 1].getElementsByTagName('DIV')[2].getElementsByTagName('P')[1])
        // console.log('divvsssssssssss',rows[i].getElementsByTagName('DIV')[0].getElementsByClassName('PHolder')[0].children[1].innerText)
        // console.log(rows[i].getElementsByTagName("div")[0].getElementsByClassName('PHolder').getElementsByClassName('name'),'xxxxxxxxxxxxxxxxxxxxxxxxx')
        y = rows[i + 1].getElementsByTagName('DIV')[2].getElementsByTagName('P')[1]        //check if the two rows should switch place:
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
        const pledge  = await this.pledgingservice.sendPledge(finalAmt,projectSN)
        console.log("Pledge latest projects",pledge)
        return pledge
        
    }


}
