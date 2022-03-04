import { Injectable } from '@angular/core';
import {Sidebar} from "../Model/sidebar";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private HttpClient:HttpClient) { }

  getListSidebar():Observable<Array<Sidebar>>{
    return this.HttpClient.get<Array<Sidebar>>("http://localhost:8000/api/sidebar");
  }
}
