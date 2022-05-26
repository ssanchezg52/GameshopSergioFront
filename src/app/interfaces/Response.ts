import { Edition } from "./Edition";
import { Game } from "./Game";

export interface Response{
  timeStamp:Date;
	statusCode:number;
	status:string;
	reason:string;
	message:string;
	error_message:string;
	developerMessage:string;
	data:{gameEditionListContent:EditionDTO}
}

export interface EditionDTO{
  editionList:Content;
  lastPage:boolean;
}

export interface Content{
  content:Edition[];
}
