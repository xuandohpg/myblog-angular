import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Game} from "../Model/game";


@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private HttpClient:HttpClient) { }

  getListGame():Observable<Array<Game>>{
    return this.HttpClient.get<Array<Game>>("http://localhost:8000/api/game");
  }
  getListGameByIdCategory(id:number):Observable<Array<Game>>{
    return this.HttpClient.get<Array<Game>>("http://localhost:8000/api/game?idCategory="+id);
  }

  getListGameNews():Observable<Array<Game>>{
    return this.HttpClient.get<Array<Game>>("http://localhost:8000/api/game?status=1");
  }
}
