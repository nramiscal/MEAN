import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  level = 1;
  display:boolean = false;

  setLevel(level){
      console.log(level);
  }

  setDisplay(){
      this.display = true;
  }

  ngOnInit(){
  }
}
