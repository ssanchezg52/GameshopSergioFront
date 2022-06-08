import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogLoginErrorComponent } from '../dialog-login-error/dialog-login-error.component';
import { DialogRegistrationErrorComponent } from '../dialog-registration-error/dialog-registration-error.component';
import { DialogSuccessfullyLoggedInComponent } from '../dialog-successfully-logged-in/dialog-successfully-logged-in.component';
import { DialogSuccessfullyRegisterComponent } from '../dialog-successfully-register/dialog-successfully-register.component';
import { RegisterUser } from '../interfaces/RegisterUser';
import { User } from '../interfaces/User';
import { Token } from "../interfaces/Token";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private readonly apiUrl = "http://localhost:8080"
  private _authenticated = false;
  private _user?:User = undefined;

  constructor(private http:HttpClient,private router:Router,private dialog:MatDialog) {

  }

  getAccessToken(username:string,password:string){
    this._authenticated = false;
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      }),
      params: new HttpParams()
        .set("username",username)
        .set("password",password)
    }
    return this.http.post<User>(this.apiUrl+"/login",null,httpOptions).subscribe(
      user=>{
      this._user = user;
      this._authenticated = true;
      $(".spinnerContainer").css("display","none");
      this.dialog.open(DialogSuccessfullyLoggedInComponent)
      setTimeout(()=>{
        this.router.navigate(["/"]);
      },1000)
      },
      error => {
        $(".spinnerContainer").css("display","none");
        this.dialog.open(DialogLoginErrorComponent)
        this.closeDialog(3000);
    });
  }

  registerNewUser(registerUser:RegisterUser){
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json; charset=UTF-8"
      }),
      params: new HttpParams()
        .set("username",registerUser.user)
        .set("password",registerUser.pass)
        .set("passwordConfirm",registerUser.passConfirm)
    }
    this.http.post<Boolean>(this.apiUrl+"/register",null,httpOptions).subscribe((e)=>{
        if (e != false){
          this.dialog.open(DialogSuccessfullyRegisterComponent)
          setTimeout(()=>{
            this.dialog.closeAll();
            this.getAccessToken(registerUser.user,registerUser.pass);
            this.router.navigate(["/"]);
          }, 1000)
        }else{
          $(".spinnerContainer").css("display","none");
          this.dialog.open(DialogRegistrationErrorComponent)
          this.closeDialog(3000);
        }
      },
      error=>{
        $(".spinnerContainer").css("display","none");
        this.dialog.open(DialogRegistrationErrorComponent)
        this.closeDialog(3000);
      });
  }

  refreshToken(){
    let httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer "+this._user?.tokens.refresh_token
      })}
      this.http.get<Token>(this.apiUrl+"/token/refresh",httpOptions).subscribe(token=>{
        if (this._user != undefined){
          this._user.tokens.access_token = token.access_token;
          this._user.tokens.refresh_token = token.refresh_token;
        }
      });
  }

  logOut(){
    this.http.get(this.apiUrl+"/logout");
    this._authenticated = false;
  }

  closeDialog(time:number){
    setTimeout(()=>{
      this.dialog.closeAll();
    },time)
  }

  public get authenticated(){
    return this._authenticated;
  }

  public get accessToken(){
    return this._user?.tokens.access_token;
  }

  public getUser(){
    return this._user;
  }
}
