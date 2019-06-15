import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../service/author.service'
import { AuthorModel } from '../models/author.model'

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    providers: [
        AuthorService
    ]
})
export class SidebarComponent implements OnInit {
    public authors: Array<AuthorModel>
    constructor(
        private _AuthorService : AuthorService,
    ) {


    }
    ngOnInit() {
        this._AuthorService.getAuthors(  ).subscribe(
            result => {
                console.log(result);
                this.authors = result;

            }, error => {
                var errMsg = <any>error;
                console.log(errMsg);
            }
        )
    }


}
