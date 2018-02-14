import { Component } from '@angular/core';
import {GoldService} from './gold.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myGold: number;
  totalGold: number = this._goldService.getTotalGold();

  constructor(private _goldService: GoldService){}

  ngOnInit(){
      this._goldService.myGold.subscribe(
          (newGold) => { this.myGold = newGold; }
      );
  }
}
