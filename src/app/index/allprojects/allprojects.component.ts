import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-allprojects',
  templateUrl: './allprojects.component.html',
  styleUrls: ['./allprojects.component.scss']
})
export class AllprojectsComponent implements OnInit {
  allPro = []
  prop = []
  name = ""
  Team =[]
  constructor(private db:FirebaseService) { }

  async allProjects()
  {
    const data =await this.db.getData();
    this.allPro = data
    
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
async editPage()
{

}

}
