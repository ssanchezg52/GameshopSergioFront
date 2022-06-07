import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { NavComponent } from './nav/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { GameCardComponent } from './game-card/game-card.component';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { DialogGamesComponent } from './dialog-games/dialog-games.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DialogSuccessfullyLoggedInComponent } from './dialog-successfully-logged-in/dialog-successfully-logged-in.component';
import { DialogSuccessfullyRegisterComponent } from './dialog-successfully-register/dialog-successfully-register.component';
import { DialogRegistrationErrorComponent } from './dialog-registration-error/dialog-registration-error.component';
import { DialogLoginErrorComponent } from './dialog-login-error/dialog-login-error.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    NavComponent,
    GameCardComponent,
    DialogGamesComponent,
    LoginComponent,
    RegisterComponent,
    SpinnerComponent,
    DialogSuccessfullyLoggedInComponent,
    DialogSuccessfullyRegisterComponent,
    DialogRegistrationErrorComponent,
    DialogLoginErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
