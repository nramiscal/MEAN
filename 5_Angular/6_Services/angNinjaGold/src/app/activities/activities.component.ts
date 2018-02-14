import { Component, OnInit } from '@angular/core';
import {GoldService} from '../gold.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  activities: string[] = this._goldService.getActivities();

  constructor(private _goldService: GoldService) { }

  ngOnInit() {}


}
