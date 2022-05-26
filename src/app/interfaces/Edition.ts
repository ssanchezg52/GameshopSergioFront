import { Game } from "./Game";

export interface Edition{
  editionId:number;
  name:string;
  price:number;
  game:Game
}
