import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { CanActivatedGuard } from './guard/can-activated.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "" , component: GameComponent, canActivate: [CanActivatedGuard]
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "register", component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
