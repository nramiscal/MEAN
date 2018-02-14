import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() allQuotes;
  @Output() emitter = new EventEmitter();

  buttons = [['Vote Up','up', 1], ['Vote Down','down', -1], ['Delete','delete', 0]]
  constructor() { }

  ngOnInit() {
  }

}
