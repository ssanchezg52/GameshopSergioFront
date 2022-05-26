import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Edition } from '../interfaces/Edition';
import { Pagination } from '../interfaces/Pagination';
import { DistributeListGamesService } from '../services/distribute-list-games.service';
import { GameEditionService } from '../services/game-edition.service';
import { Response } from '../interfaces/Response';
import { MatDialog } from '@angular/material/dialog';
import { DialogGamesComponent } from '../dialog-games/dialog-games.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  page:number = 0;
  size:number = 9;
  searchGameTittle:string = "";
  gameEditionList:Edition[] = [];
  constructor(private gameEditionService:GameEditionService,private distributeGameList:DistributeListGamesService) { }

  ngOnInit() {
    this.getGameEditionListByPage();
  }

  getGameEditionListByPage(){
    this.gameEditionService.getGameEditionListByPage(new Pagination(this.page,this.size)).subscribe(
      response => {
        this.gameEditionList.push(...response.data.gameEditionListContent.editionList.content)
        this.distributeGameList.addGameEditionList(this.gameEditionList);
        this.isLastPage(response)
      }
    );
  };

  eventFocusSearch(){
    $(".containerSearch").addClass("addBoxShadow");
  }

  eventBlurSearch(){
    $(".containerSearch").removeClass("addBoxShadow");
  }

  searchNameGame(){
    if (this.searchGameTittle == ""){
      this.page = 0;
      this.gameEditionList = [];
      this.getGameEditionListByPage();
    }else{
      this.gameEditionService.getGameEditionListBySearch(this.searchGameTittle,new Pagination(this.page,this.size)).subscribe(
        response => {
          this.gameEditionList = response.data.gameEditionListContent.editionList.content;
          this.isLastPage(response)
        }
      )
    }
  }

  isLastPage(response:Response){
    if (response.data.gameEditionListContent.lastPage == true){
      $("#btnVerMas").hide();
    }else{
      $("#btnVerMas").show();
    }
  }

  turnThePage(){
    this.page++;
    this.getGameEditionListByPage();
  }
}