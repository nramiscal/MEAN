import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  @Input() powerLevel;
  @Input() display;
  constructor() { }

  classes = [
      ['Human', 1, 0, ""],
      ['Saiyan', 10, 0, ""],
      ['SuperSaiyan', 90, 0, ""],
      ['SuperSaiyanTwo', 150, 9000, "Over 9000!"],
      ['SuperSaiyanThree', 250, 20000, "Superlative!"],
      ['SuperSaiyanFour', 500, 49999, "The One"]
  ];

  ngOnInit() {
  }

}
