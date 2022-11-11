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

  async sortDiv() {
    var word, div, rows, switching, i, x, y, shouldSwitch;
    div = await document.getElementById("MarFunPast");
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
        
        x = rows[i].getElementsByTagName('DIV')[1].getElementsByTagName('P')[1]
        console.log('dd',x)    
        console.log('testtttttttttt',rows[i + 1].getElementsByTagName('DIV')[1].getElementsByClassName('names')[0].innerHTML)
        // console.log('divvsssssssssss',rows[i].getElementsByTagName('DIV')[0].getElementsByClassName('PHolder')[0].children[1].innerText)
        // console.log(rows[i].getElementsByTagName("div")[0].getElementsByClassName('PHolder').getElementsByClassName('name'),'xxxxxxxxxxxxxxxxxxxxxxxxx')
         y = rows[i + 1].getElementsByTagName('DIV')[1].getElementsByClassName('names')[0]        
        //check if the two rows should switch place:
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
  toggle()
  {
    document.getElementById('downPast').classList.toggle('showw')
  }


}
