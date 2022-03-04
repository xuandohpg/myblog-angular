import { Component, OnInit } from '@angular/core';
import {BannerService} from "../Services/banner.service";
import {Banner} from "../Model/banner";
import {PostService} from "../Services/post.service";
import {Post} from "../Model/post";
import {CategoryGame} from "../Model/categoryGame";
import {CategoryGameService} from "../Services/category-game.service";
import {GameService} from "../Services/game.service";
import {Game} from "../Model/game";
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

public link_banner:string='';
public image_banner:string='';
public listTopLeft:Array<Post>=new Array<Post>();
public listTopRight:Array<Post>=new Array<Post>();

public listTopLeft1:Array<Post>=new Array<Post>();
public listTopRight1:Array<Post>=new Array<Post>();

public listNewsPost:Array<Post>=new Array<Post>();
public isIdActive:number=1;
public listGame:any;
public dsGame:any[]=[];
public listCategoryGame:Array<CategoryGame>=new Array<CategoryGame>();
  constructor(private GameService:GameService,private BannerService:BannerService,private PostService:PostService,private CategoryGameService:CategoryGameService) { }
  ngOnInit(): void {

    this.BannerService.getBanner().subscribe(data=>{
      this.link_banner=data.link;
      this.image_banner=data.link_image;
    })
    this.PostService.getListPost(2,15).subscribe(data=>{
      this.listTopLeft=data;
    })
    this.PostService.getListPost(2,16).subscribe(data=>{
      this.listTopRight=data;
    })

    this.PostService.getListPost(4,17).subscribe(data=>{
      this.listTopLeft1=data;
    })

    this.PostService.getListPost(5,18).subscribe(data=>{
      this.listTopRight1=data;
    })
    this.PostService.getListPost(3,19).subscribe(data=>{
      this.listNewsPost=data;
    })

    this.CategoryGameService.getCategoryGame().subscribe(data=>{
      this.listCategoryGame=data;
    })
    this.GameService.getListGameNews().subscribe(data=>{
        this.dsGame=data;
    })
  }
  onClick(isClick:number=0){
    this.isIdActive=isClick;
    this.dsGame=[];
    if(isClick===1){
      this.GameService.getListGameNews().subscribe(data=>{
        this.dsGame=data;
      })
    }
    else if(isClick===99){
      this.GameService.getListGame().subscribe(data=>{
        this.dsGame=data;
      })
    }
    else{
      this.GameService.getListGameByIdCategory(isClick).subscribe(data=>{
        this.dsGame=data;
      })
    }

  }
}
