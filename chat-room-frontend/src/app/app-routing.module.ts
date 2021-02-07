import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'chatRoom',component:ChatRoomComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
