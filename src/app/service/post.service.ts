import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment.prod';


@Injectable()
export class PostService {
  constructor(private http: HttpClient) { }
  url = environment.HOST;


  
  getPosts( limit, page ): Observable<any> {
    // const headers = new HttpHeaders()
    //           .set("rel", "custom header value");
    return this
            .http
            .get(`${this.url}/posts?_limit=`+ limit +`&_page=`+ page,  {observe: 'response'});
  }
  getPostForAuthor( limit,page, id): Observable<any> {
    return this
            .http
            .get(`${this.url}/posts?_limit=`+ limit +`&author=`+ id + `&_page=`+ page,  {observe: 'response'} )
  }
  getPostsByOrder( sort, order, author ): Observable<any> {
    // const headers = new HttpHeaders()
    //           .set("rel", "custom header value");
    if( author ){
      return this
        .http
        .get(`${this.url}/posts?_sort=`+ sort +`&_order=`+ order + '&author=' + author +'&_limit=10',  {observe: 'response'});
    }else{
      return this
        .http
        .get(`${this.url}/posts?_sort=`+ sort +`&_order=`+ order + '&_limit=10',  {observe: 'response'});
    }
  }
}