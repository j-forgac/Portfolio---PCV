import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }
  HttpPostPozadavek(UzivatelskeJmeno: string, Heslo: string): Observable<any> {
    return this.httpClient.post('https://webhook.site/0aa0de63-5ae3-4ea8-9b0b-e93fb542cadc', {
      UzivatelskeJmeno,
      Heslo
    });
  }
  HttpGetPozadavek(UzivatelskeJmeno: string, Heslo: string): Observable<any> {
    return this.httpClient.post('https://webhook.site/0aa0de63-5ae3-4ea8-9b0b-e93fb542cadc', {
      UzivatelskeJmeno,
      Heslo
    });
  }
}

