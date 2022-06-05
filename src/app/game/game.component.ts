import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Edition } from '../interfaces/Edition';
import { Pagination } from '../interfaces/Pagination';
import { DistributeListGamesService } from '../services/distribute-list-games.service';
import { GameEditionService } from '../services/game-edition.service';
import { Response } from '../interfaces/Response';
import { MatDialog } from '@angular/material/dialog';
import { DialogGamesComponent } from '../dialog-games/dialog-games.component';
import { TokenService } from '../services/token.service';
import { Filter } from '../interfaces/Filter';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private calls:number = 0;
  page:number = 0;
  size:number = 9;
  searchGameTittle:string = "";
  optionSelectedPlataform:string = "Todos";
  gameEditionList:Edition[] = [];
  constructor(private gameEditionService:GameEditionService,private distributeGameList:DistributeListGamesService,private tokenService:TokenService) { }

  ngOnInit() {
    this.getGameEditionListByPage();
  }

  getGameEditionListByPage(){
    this.gameEditionService.getGameEditionListByPage(new Pagination(this.page,this.size),this.tokenService.accessToken).subscribe(
      response => {
        this.gameEditionList.push(...response.data.gameEditionListContent.editionList.content)
        this.distributeGameList.addGameEditionList(this.gameEditionList);
        this.isLastPage(response)
      },
      error => {
        if (this.calls < 1){
          this.tokenService.refreshToken();
        setTimeout(() => {
          this.calls++;
          this.getGameEditionListByPage();
        },120)
        }
      }
    );

  };

  eventFocusSearch(){
    $(".containerSearch").addClass("addBoxShadow");
  }

  eventBlurSearch(){
    $(".containerSearch").removeClass("addBoxShadow");
  }

  searchByFilter(isTurnPage:boolean){
    if (!isTurnPage){
      this.page = 0;
    }
    this.getGameListByFilter();
  }

  getGameListByFilter(){
    if (this.searchGameTittle == "" && this.optionSelectedPlataform == "Todos"){
      this.gameEditionList = [];
      this.getGameEditionListByPage();
    }else{
      let filter:Filter = {plataformSelected:this.optionSelectedPlataform, search: this.searchGameTittle}
      this.gameEditionService.getGameEditionListByFilter(filter,new Pagination(this.page,this.size),this.tokenService.accessToken).subscribe(
        response => {
          if (this.page < 1){
            this.gameEditionList = response.data.gameEditionListContent.editionList.content;
          }else{
            this.gameEditionList.push(...response.data.gameEditionListContent.editionList.content);
          }
          this.isLastPage(response);
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
    if (this.searchGameTittle == "" && this.optionSelectedPlataform == "Todos"){
      this.getGameEditionListByPage();
    }else{
      this.searchByFilter(true)
    }
  }
}
