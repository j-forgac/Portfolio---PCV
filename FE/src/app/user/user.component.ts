import { Component, OnInit } from '@angular/core';
import {UserData} from './UserData';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  myMap: Map<number, string> = new Map();
  text = '';
  isEditing = false;
  userData: UserData[] = [];

  constructor() {
    /*this.myMap = new Map();*/

  }

  ngOnInit(): void {
  }

  addUserData(): void{
    this.isEditing = !this.isEditing;
    this.userData.push(new UserData(this.text));
    console.log(this.text);
    console.log(this.userData);
  }

}
