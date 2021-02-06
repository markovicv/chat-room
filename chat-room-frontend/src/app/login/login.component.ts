import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }


  login(){
    if(this.username!=null && this.password!=null){
        this.loginService.setCurrentLogedUser(this.username);
        this.router.navigateByUrl("/chatRoom");
    }
  }




}
