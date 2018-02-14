import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  level:number;
  // powers:Array<number> = [];
  human_power:number;
  saiyan_power:number;
  supersaiyan_power:number;
  supersaiyantwo_power:number;
  supersaiyanthree_power:number;
  supersaiyanfour_power:number;

  // fillArray() {
  //   for (let i = 1; i <= 100; i++) {
  //     this.powers.push(i);
  //   }
  //   return this.powers;
  // }

  calculatePowers(){
    console.log(this.level);
    this.human_power = this.level;
    this.saiyan_power = this.level * 10;
    this.supersaiyan_power = this.level * 90;
    this.supersaiyantwo_power = this.level * 150;
    this.supersaiyanthree_power = this.level * 250;
    this.supersaiyanfour_power = this.level * 500;
  }

  ngOnInit() {
    // this.fillArray();
  }

}