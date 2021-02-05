import { Component } from '@angular/core';
import { MessageApiService } from './services/message-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'websockets';

  input;
  probica:Array<String> =[];  

  constructor(public messageService:MessageApiService){
    this.messageService.initWebSockets();
    
  }

  sendMessage(){
    if(this.input){
      this.messageService.sendMessage(this.input);
      this.input = '';
    }
  }
}
