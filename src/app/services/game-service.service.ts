import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  private readonly apiUrl = "http://localhost:8080";
  private readonly gameListByPage = "/getGameList/";

  constructor(private http:HttpClient) { }

  getGameListByPage(page:number,size:number):Observable<Response>{
    return <Observable<Response>> this.http.get<Response>(this.apiUrl + this.gameListByPage + page + "/"+ size);
  }
}
