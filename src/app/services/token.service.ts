import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private readonly apiUrl = "http://localhost:8080"
  private _authenticated = false;
  private _user?:User = undefined;

  constructor(private http:HttpClient) { }

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
    this.http.post<User>(this.apiUrl+"/login",null,httpOptions).subscribe(user=>{
      this._user = user;
      this._authenticated = true;
    });
  }

  registerNewUser(username:string,password:string,passwordConfirm:string){
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json; charset=UTF-8"
      }),
      params: new HttpParams()
        .set("username",username)
        .set("password",password)
        .set("passwordConfirm",passwordConfirm)
    }
    this.http.post<Boolean>(this.apiUrl+"/register",null,httpOptions).subscribe((e)=>{
      if (e != false){
        this.getAccessToken(username,password);
      }else{
        alert("EL USUARIO YA EXISTE O LAS CONTRASEÑAS NO COINCIDEN");
      }
    });
  }

  refreshToken(){
    let httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer "+this._user?.tokens.refresh_token
      })}
      this.http.get<User>(this.apiUrl+"/token/refresh",httpOptions).subscribe(user=>{
        this._user = user;
      });
  }

  logOut(){
    this.http.get(this.apiUrl+"/logout");
    this._authenticated = false;
  }

  public get authenticated(){
    return this._authenticated;
  }

  public get accessToken(){
    return this._user?.tokens.access_token;
  }
}
