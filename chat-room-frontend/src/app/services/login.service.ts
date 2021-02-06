import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userLoged;

  constructor() { }

  setCurrentLogedUser(user){
    this.userLoged =user;
  }
  getCurrentLoggedUser():any{
    return this.userLoged;
  }


}
