import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../model/login-request';
import { LoginResponse } from '../model/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userLoged;

  constructor(private http:HttpClient) { }


  login(loginRequest:LoginRequest):Observable<any>{
    return this.http.post<LoginResponse>("http://localhost:8081/user/auth",loginRequest);
  }

  setCurrentLogedUser(user){
    this.userLoged =user;
  }
  getCurrentLoggedUser():any{
    return this.userLoged;
  }


}
