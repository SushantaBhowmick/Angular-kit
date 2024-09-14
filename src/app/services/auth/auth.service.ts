import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiUrl;
  

  constructor(private http:HttpClient) { }

  //signIn
  signIn(credentials:{email:string;password:string}):Observable<any>{
    return this.http.post(`${this.baseUrl}/login`,credentials,{withCredentials:true});
  }

  //signUp
  signUp(credentials:{email:string;password:string}):Observable<any>{
    return this.http.post(`${this.baseUrl}/register`,credentials);
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
