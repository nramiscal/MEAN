import { Component, OnInit } from '@angular/core';
import { NumsService } from '../nums.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private _numsService: NumsService) { }

  ngOnInit() {
  }

  nums2 = this._numsService.getRand2();

  addNum2() {
      this._numsService.addRand2();
  }

}
