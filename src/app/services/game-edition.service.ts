import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from '../interfaces/Pagination';
import { Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class GameEditionService {

  private readonly apiUrl = "http://localhost:8080";
  private readonly gameEditionListByPage = "/getGameEditionListByEdition/";
  private readonly gameEditionListBySearch = "/getGameEditionListBySearch/";

  constructor(private http:HttpClient) { }

  getGameEditionListByPage(pagination:Pagination):Observable<Response>{
    return <Observable<Response>> this.http.get<Response>(this.apiUrl + this.gameEditionListByPage + pagination.page + "/" +pagination.size);
  }

  getGameEditionListBySearch(search:string,pagination:Pagination):Observable<Response>{
    return <Observable<Response>> this.http.get<Response>(this.apiUrl + this.gameEditionListBySearch + pagination.page + "/"+ pagination.size + "/" + search);
  }
}
