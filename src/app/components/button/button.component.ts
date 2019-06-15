import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {PostComponent} from '../post/post.component';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
    providers: [
    ]
})
export class ButtonComponent implements OnInit {
    @Input() text : string
    constructor(

    ) {
    }
    ngOnInit() {

    }



}
