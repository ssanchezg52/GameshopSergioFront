import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Edition } from '../interfaces/Edition';

@Component({
  selector: 'app-dialog-games',
  templateUrl: './dialog-games.component.html',
  styleUrls: ['./dialog-games.component.css']
})
export class DialogGamesComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public edition:Edition) { }

  ngOnInit(): void {
  }



}
