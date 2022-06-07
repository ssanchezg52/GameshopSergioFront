import { HtmlTagDefinition } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogGamesComponent } from '../dialog-games/dialog-games.component';
import { Edition } from '../interfaces/Edition';
import { FavoriteGameListService } from '../services/favorite-game-list.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  @Input() gameEditionListInput:Edition[] = [];
  constructor(private dialog:MatDialog,private favoriteListGame:FavoriteGameListService) {
   }

  ngOnInit(): void {

  }

  openDialog(edition:Edition){
    this.dialog.open(DialogGamesComponent, {
      height: "90%",
      width: "100%",
      data: edition
    });
  }

}
