import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Interceptor } from './interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ChatRoomComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:Interceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
