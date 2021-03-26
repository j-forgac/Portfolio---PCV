import { Component, OnInit } from '@angular/core';
import {UserData} from './UserData';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  myMap: Map<number, string> = new Map();
  about = '';
  experience  = '';
  skills  = '';
  isEditing = false;
  userData: string[] = [];
  userExperience: string[] = [];
  userSkills: string[] = [];

  constructor() {
    /*this.myMap = new Map();*/

  }

  ngOnInit(): void {
  }

  addUserData(): void{
    this.isEditing = !this.isEditing;
    console.log(this.about);
    this.userData = this.about.split('\n');
    this.userExperience = this.experience.split('\n');
    this.userSkills = this.skills.split('\n');
  }

}
