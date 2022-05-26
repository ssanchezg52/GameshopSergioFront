import { Injectable } from '@angular/core';
import { Edition } from '../interfaces/Edition';

@Injectable({
  providedIn: 'root'
})
export class DistributeListGamesService {

  private gameEditionList:Edition[] = [];

  constructor() { }

  addGameEditionList(list:Edition[]){
    this.gameEditionList = list;
  }

  getGameEditionList():Edition[]{
    return this.gameEditionList;
  }
}
