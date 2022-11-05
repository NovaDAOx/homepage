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
  constructor(private db:FirebaseService) { }

  async allProjects()
  {
    const data =await this.db.getData();
    this.allPro = data
    
  }
  proposal = (event): void =>
  {
    const arry = <any>[]
    console.log(event,'ppppppppppppppppppppppp')
    arry.push({name:event.path[2].children[1].children[1].innerHTML,Desctiption:event.path[2].children[1].children[2].innerHTML,
      Amount:event.path[2].children[1].children[3].children[1].innerText,src:event.path[2].children[0].children[0].currentSrc})
      console.log('++++++++++++++++++++++++',arry)
      const Array = arry.map(Item => {
        console.log('item',Item)
        return Item
      })
      this.prop = Array
    }
  

  ngOnInit(): void {
    this.allProjects();
  }
async editPage()
{

}

}
