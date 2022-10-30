import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-reviewpage',
  templateUrl: './reviewpage.component.html',
  styleUrls: ['./reviewpage.component.scss']
})
export class ReviewpageComponent implements OnInit {
latestPro =[]
  constructor(private db:FirebaseService) { }
  async latest()
  {
    this.db.latestPro();
    const recPro = <any> await this.db.latestPro()
    this.latestPro =<any>await recPro
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^6',this.latestPro)
  }
  
  ngOnInit(): void {
    this.latest();
  }

}
