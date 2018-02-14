import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  objArray = [];
  switchObj = {};

  fillObjArray() {
    for (let i=0; i < 10; i++){
      this.switchObj = {
        on: true,
        color: 'green',
        text: 'ON'
      }
      this.objArray.push(this.switchObj);
    }
  }

  flip_switch(idx:number){
    // console.log(idx);
    // console.log(this.objArray[idx].on);
    if (this.objArray[idx].on){
      this.objArray[idx].on = false;
      this.objArray[idx].color = 'red';
      this.objArray[idx].text = 'OFF';
    }
    else {
      this.objArray[idx].on = true;
      this.objArray[idx].color = 'green';
      this.objArray[idx].text = 'ON';

    }
    // console.log(`flip_switch invoked for index: + ${idx}`);
  }

  ngOnInit() {
    this.fillObjArray();
  
  }

}

