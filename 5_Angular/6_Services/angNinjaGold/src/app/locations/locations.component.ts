import { Component, OnInit } from '@angular/core';
import {GoldService} from '../gold.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations: object[] = this._goldService.getLocations();

  constructor(private _goldService: GoldService) { }

  ngOnInit() {
  }

  calcWinnings(name){
      this._goldService.calculateTotalGold(name);
  }

}
