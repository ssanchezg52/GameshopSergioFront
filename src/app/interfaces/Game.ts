import { Plataform } from "./Plataform";

export interface Game{
  gameId:number;
  name:string;
  developer:string;
  gender:string;
  minimum_age:number;
  releaseDate:Date;
  description:string;
  trailer:string;
  coverPage:string;
  plataform:Plataform[];
}
