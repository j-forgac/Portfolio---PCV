import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FE';
  searchText;
  components = [
    { name: 'app.component'},
    { name: 'second-page'},
    { name: 'third-page'},
    { name: 'fourth-page'},
    { name: 'fifth-page'},
    { name: 'blogpost'}
  ];
}
