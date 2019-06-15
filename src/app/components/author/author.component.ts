import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthorModel } from '../../models/author.model'
import { AuthorService } from '../../service/author.service'

@Component({
    selector: 'app-author',
    templateUrl: './author.component.html',
    styleUrls: ['./author.component.css'],
    providers: [
        AuthorService
    ]
})
export class AuthorComponent implements OnInit {
    @Input() authorNumber : number

    // @Input() lastName : string
    // public author: AuthorModel;
    public author: Array<AuthorModel>

    constructor(
        private _AuthorService: AuthorService
    ) {

        // this.posts = [
        //     new AuthorModel(1, "titulo 1", "December 1, 2019 01:00:00", "lorem impsun dolor bla", 1),
        //     new AuthorModel(2, "My titulo 2", "December 10, 2019 01:00:00", "lordsaem impsun dolor bla", 3),
        //     new AuthorModel(3, "My titulo 3", "December 21, 2019 01:00:00", "lorem imps dsadsad dasun dolor bla", 4)
        // ]
    }
    ngOnInit() {
        this._AuthorService.getAuthor( this.authorNumber ).subscribe(
            result => {
                console.log(result);
                this.author = result;

            }, error => {
                var errMsg = <any>error;
                console.log(errMsg);
            }
        )
        // this.author = new AuthorModel(2, "My titulo", "17/06/19", "lorem impsun dolor bla", 2);
    }



}
