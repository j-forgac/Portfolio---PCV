import { Component } from '@angular/core';
import {UserService} from '../user.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  title = 'Register';

  UzivatelskeJmeno = '';
  Heslo = '';
  Prijmuto = false;


  constructor(private apiService: UserService) {
  }

  VytvoritUzivatele(): void {
    this.apiService.HttpGetPozadavek(this.UzivatelskeJmeno, this.Heslo).subscribe(() => {
      this.Prijmuto = true;
    });
  }
}
