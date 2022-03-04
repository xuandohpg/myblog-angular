import { Injectable } from '@angular/core';
import { Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Post} from "../Model/post";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private HttpClient:HttpClient) { }

  getListPost(limit:number,category_id:number):Observable<Array<Post>>{
    return this.HttpClient.get<Array<Post>>("http://localhost:8000/api/post?limit="+limit+"&idCategory="+category_id);
  }

  getPostById(id:number):Observable<any>{
    return this.HttpClient.get<any>("http://localhost:8000/api/post?id="+id);
  }
}
