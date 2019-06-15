import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { PostModel } from '../../models/post.model'
import { PostService } from '../../service/post.service'
import { AuthorService } from '../../service/author.service'
import {PageEvent} from '@angular/material/paginator';
import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [ 
    PostService,
    AuthorService
  ]
})
export class PostComponent implements OnInit {

  public post:PostModel;
  @Input() posts:Array<PostModel>
  public authors:Array<PostModel>

  public idPost: number;

  public length = 100; //x-total-count"
  public pageSize: number = 10;
  public pageSizeOptions: number[] = [ 10, 15];
  public currentPage = 1  ;
   // MatPaginator Output
   pageEvent: PageEvent;
  //  @Output() page: EventEmitter<any> = new EventEmitter();

  constructor( 
      private _PostService : PostService,
      private _AuthorService : AuthorService,
      private _route: ActivatedRoute,
      private _router: Router
    ){
   
    // this.posts =[
    //   new PostModel(1,"titulo 1","December 1, 2019 01:00:00","lorem impsun dolor bla",1), 
    //   new PostModel(2,"My titulo 2","December 10, 2019 01:00:00","lordsaem impsun dolor bla",3), 
    //   new PostModel(3,"My titulo 3","December 21, 2019 01:00:00","lorem imps dsadsad dasun dolor bla",4)
    // ]
  }
  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.idPost = params['id'];
      // console.log( params)
    })

    this.changePost();

    // this.post = new PostModel(2,"My titulo","17/06/19","lorem impsun dolor bla",2);
  }
  public changePost(){
    if( this.idPost ){
      this._PostService.getPostForAuthor( this.pageSize, this.currentPage ,this.idPost ).subscribe(
        result => {
          console.log(result.body);
          this.length = result.headers.get('X-Total-Count');
          this.posts = result.body;
          
        }, error =>{
          var errMsg = <any>error;
          console.log(errMsg);
        }
      )
    } else{
      this._PostService.getPosts( this.pageSize, this.currentPage ).subscribe(
        result => {
          console.log(result); 
          //alert( result.headers.get('Link').split(";") ); // server sent same urls, this does not work for pagination
          this.length = result.headers.get('X-Total-Count');
          this.posts = result.body;
          
        }, error =>{
          var errMsg = <any>error;
          console.log(errMsg);
        }
      )
    }
  }

  changeOrder( sort, order, author){
    // alert("change order")
    this._PostService.getPostsByOrder( sort, order, author ).subscribe(
      result => {
        console.log(result); 
        // this.length = result.headers.get('X-Total-Count');
        this.posts = result.body;
        
      }, error =>{
        var errMsg = <any>error;
        console.log(errMsg);
      }
    )
  }
  NextPagePosts( ){
    // alert("change page")
    this.currentPage = this.currentPage + 1;
    this._PostService.getPosts( this.pageSize, this.currentPage ).subscribe(
      result => {
        console.log(result); 
        this.length = result.headers.get('X-Total-Count');
        this.posts = result.body;
        
      }, error =>{
        var errMsg = <any>error;
        console.log(errMsg);
      }
    )
  }
  PrevPagePosts( ){
    if( this.currentPage !== 1){
      this.currentPage = this.currentPage - 1;
    } 
    this._PostService.getPosts( this.pageSize, this.currentPage ).subscribe(
      result => {
        console.log(result); 
        //alert( result.headers.get('Link').split(";") ); // server sent same urls, this does not work for pagination
        this.length = result.headers.get('X-Total-Count');
        this.posts = result.body;
        
      }, error =>{
        var errMsg = <any>error;
        console.log(errMsg);
      }
    )
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    // alert("cambiar")
    // this.currentPage = 2;
    this.changePost();
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    alert( this.pageSizeOptions  )
  }



}
