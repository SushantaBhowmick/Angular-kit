import { Injectable } from '@angular/core';
// import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://expresskit-h01e.onrender.com/api';
  

  constructor(private http:HttpClient) { }

  //getUser
  getUser():Observable<any>{
    return this.http.get(`${this.baseUrl}/me`);
  }

}
