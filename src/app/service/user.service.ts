import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080/user/';

  public getAllUsers(): Observable<any> {
      const headers = new HttpHeaders({'Content-type': 'application/json', 'Accept': 'application/json'});
      return this.http.get(this.baseUrl + 'getAll', {observe: 'response', headers: headers});
  }

  public createUpdateUser(userObject): Observable<any> {
      const headers = new HttpHeaders({'Content-type': 'application/json', 'Accept': 'application/json'});
      return this.http.post(this.baseUrl + 'up', userObject,  {observe: 'response', headers: headers});
  }

}
