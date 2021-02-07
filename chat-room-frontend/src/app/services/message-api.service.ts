import { Injectable } from '@angular/core';
import { Message } from '../model/messae';
declare var SockJS:any;
declare var Stomp:any;

@Injectable({
  providedIn: 'root'
})
export class MessageApiService {

  public messageList:Message[] = [];
  public stompClient;

  constructor() { }

  initWebSockets(){
    const webSockets = new SockJS('http://localhost:8081/skavula');
    this.stompClient = Stomp.over(webSockets);
    let that = this;

    this.stompClient.connect({},()=>{
      that.stompClient.subscribe('/message',message=>{
        const chatMsg:Message = JSON.parse(message.body);
         this.messageList.push(chatMsg);
        
      });
    });
  }

  sendMessage(msg){
    this.stompClient.send('/app/send/message',{},msg);
  }
}
