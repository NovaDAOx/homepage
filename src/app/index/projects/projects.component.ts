import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
recentPro = [] ; 
name = ""
prop = [] ;
Team = [] ; 
  constructor( private db:FirebaseService) 
  {}

async recent()
{
  this.db.recentPro();
  const recPro = <any> await this.db.recentPro()
  this.recentPro =<any>await recPro
  console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^7',this.recentPro)

}
backBtn()
{
  const  page = document.getElementById('landing')
  page.style.display ="block"
const propPage = document.getElementById('Data')
propPage.style.display = "none"
}

pastPropos = (event): void =>
    {
      // this.propzls();
      // document.getElementsByClassName('hoho')[0].style.display = "flex";
      const arry = <any>[]
      console.log(event.path[2].children[1].children[3].lastChild.childNodes[0].data,'ppppppppppppppppppppppp')
      arry.push({name:event.path[2].children[1].children[1].innerHTML,Description:event.path[2].children[1].children[2].innerHTML,
        Amount:event.path[2].children[1].children[3].children[1].innerText,src:event.path[2].children[0].children[0].currentSrc,
        Key:event.path[2].children[1].children[3].lastChild.childNodes[0].data,
        DescriptionT:event.path[2].children[1].children[3].children[3].childNodes[1].innerHTML
      }
        )
        console.log('++++++++++++++++++++++++',event.path[2].children[1].children[3].children[3].childNodes[0].innerHTML)
        const Array = arry.map(Item => {
          console.log('item',Item)
          return Item
        })
        this.prop = Array
        const userAddress = event.path[2].children[1].children[3].lastChild.childNodes[0].data
        this.db.getTeam(userAddress);
        this.Team = this.db.getTeam(userAddress)
        const  page = document.getElementById('landing')
        page.style.display ="none"
        
      
      }



  ngOnInit(): void {
    this.recent();
  }

}
