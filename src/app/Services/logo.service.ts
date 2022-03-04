import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Logo} from "../Model/logo";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LogoService {

  constructor(private HttpClient:HttpClient) { }

  getLogo():Observable<any>{
    return this.HttpClient.get<any>('http://localhost:8000/api/logo');
  }
}
