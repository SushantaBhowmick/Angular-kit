import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://expresskit-h01e.onrender.com/api'
  

  constructor(private http:HttpClient) { }

  //signIn
  signIn(credentials:{username:string;password:string}):Observable<any>{
    return this.http.post(`${this.baseUrl}/signin`,credentials,{withCredentials:true});
  }

  //signUp
  signUp(credentials:{username:string;password:string}):Observable<any>{
    return this.http.post(`${this.baseUrl}/signup`,credentials);
  }

  isLoggedIn():boolean{
    const token = localStorage.getItem('accessToken');
    return !!token //return true if the token exists, otherwise false
  }

  getToken():string |null{
    return localStorage.getItem('accessToken')
  }

  //logOut
  logOut():void{
    localStorage.removeItem('accessToken')
  }

}
