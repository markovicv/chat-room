import { Injectable } from '@angular/core';
declare var SockJS:any;
declare var Stomp:any;

@Injectable({
  providedIn: 'root'
})
export class MessageApiService {

  public messageList:Array<String> = [];
  public stompClient;

  constructor() { }

  initWebSockets(){
    const webSockets = new SockJS('http://localhost:8081/skavula');
    this.stompClient = Stomp.over(webSockets);
    let that = this;

    this.stompClient.connect({},()=>{
      that.stompClient.subscribe('/message',message=>{
        this.messageList.push(message.body);
      });
    });
  }

  sendMessage(msg){
    this.stompClient.send('/app/send/message',{},msg);
  }
}
