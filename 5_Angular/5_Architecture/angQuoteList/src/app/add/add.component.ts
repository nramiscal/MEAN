import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


    quote = {
        'content': '',
        'author': '',
        'rating': 0,
    }

    quotes = [];

    saveQuote(newQuote) {
        this.quotes.push(this.quote);
        this.quote =   {
              'content': '',
              'author': '',
              'rating': 0
          };
    }

    constructor() { }

    ngOnInit() {
    }



}
