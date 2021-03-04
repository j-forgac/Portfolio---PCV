import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vyhledavani',
  templateUrl: './vyhledavani.component.html',
  styleUrls: ['./vyhledavani.component.css']
})
export class VyhledavaniComponent implements OnInit {

  searchText;
  components = [
    { name: 'app.component'},
    { name: 'home'},
    { name: 'skyper'},
    { name: 'janko'},
    { name: 'kosacek'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
