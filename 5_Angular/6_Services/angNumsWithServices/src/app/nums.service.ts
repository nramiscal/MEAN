import { Injectable } from '@angular/core';

@Injectable()
export class NumsService {

  rand1: number[] = [];
  rand2: number[] = [];
  sum1: number;
  sum2: number;
  diff: number;

  constructor() { }

  getRand1() {
      return this.rand1;
  }

  getRand2() {
      return this.rand2;
  }

  addRand1() {
      this.rand1.push(Math.trunc(Math.random()*100));
      this.sum1 = this.getSum1();
      console.log(`sum1 is now ${this.sum1}`);
  }

  addRand2() {
      this.rand2.push(Math.trunc(Math.random()*100));
      this.sum2 = this.getSum2();
      console.log(`sum2 is now ${this.sum2}`);
  }

  getSum1() {
      this.sum1 = 0;
      for (let i = 0; i < this.rand1.length; i++){
          this.sum1 += this.rand1[i];
      }
      return this.sum1;
  }

  getSum2() {
      this.sum2 = 0;
      for (let i = 0; i < this.rand2.length; i++){
          this.sum2 += this.rand2[i];
      }
      return this.sum2;
  }

  generateDifference() {
      this.diff = this.sum1-this.sum2;
      return this.diff;
  }
}
