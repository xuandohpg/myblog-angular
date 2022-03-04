import { Component, OnInit } from '@angular/core';
import {Post} from "../Model/post";
import {PostService} from "../Services/post.service";

@Component({
  selector: 'app-lienquanmobile',
  templateUrl: './lienquanmobile.component.html',
  styleUrls: ['./lienquanmobile.component.css']
})
export class LienquanmobileComponent implements OnInit {

  public listTopPost:Array<Post>=new Array<Post>();
  public listPost:Array<Post>=new Array<Post>();
  constructor(private PostService:PostService) { }

  ngOnInit(): void {
    this.PostService.getListPost(3,9).subscribe(data=>{
      this.listTopPost=data;
    })

    this.PostService.getListPost(6,9).subscribe(data=>{
      this.listPost=data;
    })
  }
}
