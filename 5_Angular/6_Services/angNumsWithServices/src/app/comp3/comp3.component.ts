import { Component, OnInit } from '@angular/core';
import { NumsService } from '../nums.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  diff: number;

  constructor(private _numsService: NumsService) { }

  ngOnInit() {
  }

  getDiff() {
      this.diff = this._numsService.generateDifference();
  }



}
