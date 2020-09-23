import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient: HttpClient) { }

  signup(user: object): Observable<any>{
    return this.httpClient.post('http://localhost:8000/api/user/register', user);
  }
  login(user: object): Observable<any>{
    return this.httpClient.post('http://localhost:8000/api/user/login', user);
  }
  postal(user: object): Observable<any>{
    return this.httpClient.post('https://webservicetest.gaolania.com.es/ine.json/id/?postal', user);
  }

}