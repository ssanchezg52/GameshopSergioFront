import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogGamesComponent } from '../dialog-games/dialog-games.component';
import { Edition } from '../interfaces/Edition';
import { DistributeListGamesService } from '../services/distribute-list-games.service';
import { GameEditionService } from '../services/game-edition.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  @Input() gameEditionListInput:Edition[] = [];
  constructor(private dialog:MatDialog) {
   }

  ngOnInit(): void {

  }

  openDialog(edition:Edition){
    console.log("hey")
    this.dialog.open(DialogGamesComponent, {
      height: "90%",
      width: "100%",
      data: edition
    });
  }

}
