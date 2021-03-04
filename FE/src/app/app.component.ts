import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FE';
  searchText;
  public menu = {
    '/' : 'Home',
    kosacek: 'Kosacek',
    janko: 'Janko',
    skyper : 'Skyper',
  };
}
