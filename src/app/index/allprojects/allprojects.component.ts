import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-allprojects',
  templateUrl: './allprojects.component.html',
  styleUrls: ['./allprojects.component.scss']
})
export class AllprojectsComponent implements OnInit {
  allPro = []
  constructor(private db:FirebaseService) { }

  async allProjects()
  {
    const data =await this.db.getData();
    this.allPro = data
  }

  ngOnInit(): void {
    this.allProjects();
  }

}
