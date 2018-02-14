import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GoldService {

  myGold: BehaviorSubject<number> = new BehaviorSubject(0);

  totalGold: number = 0;
  gold: number;
  locations: object[] = [
      {
          name: "Farm",
          min: 2,
          max: 5
      },
      {
          name: "Cave",
          min: 5,
          max: 10
      },
      {
          name: "Casino",
          min: 0,
          max: 100
      },
      {
          name: "House",
          min: 7,
          max: 15
      }
  ];

  winOrLose: string;
  activities: string[] = [];

  constructor() { }

  updateMyGold(newGold:number): void {
      this.myGold.next(newGold);
  }

  getLocations() {
      return this.locations;
  }

  getTotalGold(){
      return this.totalGold;
  }

  getActivities(){
      return this.activities;
  }

  calculateTotalGold(name){
      this.winOrLose = "win";
      if (name == "Casino") {
          if (Math.floor(Math.random()*(1-0+1) + 0) == 1) {
              this.winOrLose = "lose";
          }
          console.log(this.winOrLose);
      }
      for (var object of this.locations){
          if (object["name"] == name) {
              this.gold = Math.floor(Math.random() * (object["max"] - object["min"] + 1)) + object["min"];
              console.log(`Gold is ${this.gold}`);
          }
      }
      if (this.winOrLose == "lose") {
          this.totalGold -= this.gold;
      }
      else {
          this.totalGold += this.gold;
      }
      this.updateMyGold(this.totalGold);
      console.log(`TotalGold is now ${this.totalGold}`);
      if (this.winOrLose == "lose") {
          this.activities.push(`You've lost ${this.gold} gold at the ${name}. Total gold is now ${this.totalGold}.`);
          console.log(this.activities);
      }
      else {
          this.activities.push(`You've earned ${this.gold} gold at the ${name}. Total gold is now ${this.totalGold}.`);
          console.log(this.activities);

      }

  }

}
