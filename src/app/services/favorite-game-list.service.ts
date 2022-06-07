import { Injectable } from '@angular/core';
import { Edition } from '../interfaces/Edition';

@Injectable({
  providedIn: 'root'
})
export class FavoriteGameListService {

  private favoriteGameList:Edition[] = [];

  constructor() { }

  addGameToFavoriteList(edition:Edition){
    this.favoriteGameList.push(edition);
  }

  deleteGameToFavoriteList(edition:Edition){
    let pos:number = this.favoriteGameList.findIndex(editionn=>{
      return editionn == edition;
    })
    this.favoriteGameList.splice(pos,1)
  }

  getFavoriteGameList():Edition[]{
    return this.favoriteGameList;
  }
}
