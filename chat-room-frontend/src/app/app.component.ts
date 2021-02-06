import { Component } from '@angular/core';
import { MessageApiService } from './services/message-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'websockets';


  constructor(private messageService:MessageApiService){
    this.messageService.initWebSockets();
  }

  
}
