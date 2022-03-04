import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Banner} from "../Model/banner";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private HttpClient:HttpClient) { }

  getBanner():Observable<any>{
    return this.HttpClient.get<any>("http://localhost:8000/api/banner");
  }
}
