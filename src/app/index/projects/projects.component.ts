import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
recentPro = [] ; 
  constructor( private db:FirebaseService) 
  {}

async recent()
{
  this.db.recentPro();
  const recPro = <any> await this.db.recentPro()
  this.recentPro =<any>await recPro
  console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^7',this.recentPro)

}
  ngOnInit(): void {
    this.recent();
  }

}
