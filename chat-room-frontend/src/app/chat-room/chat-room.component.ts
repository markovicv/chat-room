import { Component, OnInit } from '@angular/core';
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

  constructor(public messageService:MessageApiService,private loginService:LoginService){
    
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
    return localStorage.getItem("username");
  }
}
