import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }
  HttpPostRegistrace(username: string, heslo: string, name: string, popis: string, skills: string): Observable<any> {
    return this.httpClient.post('/BE/api/users/create', {
      username,
      heslo,
      name,
      popis,
      skills
    });
  }
  HttpPostPozadavek(UzivatelskeJmeno: string, Heslo: string): Observable<any> {
    return this.httpClient.post('https://webhook.site/1d0c240c-a30f-48db-a2b8-06b39fec64ee', {
      UzivatelskeJmeno,
      Heslo
    });
  }
  HttpGetPozadavek(UzivatelskeJmeno: string, Heslo: string): Observable<any> {
    return this.httpClient.post('https://webhook.site/1d0c240c-a30f-48db-a2b8-06b39fec64ee', {
      UzivatelskeJmeno,
      Heslo
    });
  }
}

