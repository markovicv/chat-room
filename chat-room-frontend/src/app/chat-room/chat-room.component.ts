import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../model/messae';
import { LoginService } from '../services/login.service';
import { MessageApiService } from '../services/message-api.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  input;

  constructor(public messageService:MessageApiService,private loginService:LoginService,private router:Router){
    
  }

  ngOnInit():void{
  }


  sendMessage(){
    if(this.input){
      let message:Message ={
        senderUsername:localStorage.getItem("username"),
        content:this.input
      };
      this.messageService.sendMessage(JSON.stringify(message));
      this.input = '';
    }
  }
  getUsername(){
    console.log(localStorage.getItem("username"));
    return localStorage.getItem("username");
  }
  logout(){
    localStorage.clear()
    this.router.navigateByUrl("/login");
  }
}
