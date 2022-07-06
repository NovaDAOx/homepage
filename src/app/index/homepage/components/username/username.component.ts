import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {
  @Input() username:String[]
  @Input() usernameCaptain:String[]

  constructor() { }

  ngOnInit(): void {
  }

}
