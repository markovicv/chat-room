import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../model/login-request';
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
      let loginReq:LoginRequest = {
        username:this.username,
        password:this.password
      }
      this.loginService.login(loginReq).subscribe(data=>{
        this.loginService.setCurrentLogedUser(this.username);
        localStorage.setItem("username",data.username);
        localStorage.setItem("jwt",data.jwt);
        this.router.navigateByUrl("/chatRoom");
      },error=>{
        console.log(error.error);
      });

    }
  }




}
