import { Component, OnInit } from '@angular/core';
import { NumsService } from '../nums.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private _numsService: NumsService) { }

  ngOnInit() {
  }

  nums1 = this._numsService.getRand1();

  addNum() {
      this._numsService.addRand1();
  }

}
