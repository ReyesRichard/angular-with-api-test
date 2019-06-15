import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class AuthorService {
    constructor(private http: HttpClient) { }
    url = environment.HOST;
    getAuthors(): Observable<any> {
        return this
            .http
            .get(`${this.url}/authors`);
    }
    getAuthor(id): Observable<any> {
        return this
            .http
            .get(`${this.url}/authors/`+ id);
    }
}