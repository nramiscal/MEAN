import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  colors = ['#FF00FF', '#00FFFF', '#7FFF00', '#8A2BE2', '#ADFF2F', '#4B0082', '#6A5ACD', '#87CEEB', '#00FA9A', '#C71585'];
  colorArray = [];

  fillImageArray(){
  for (let i=0; i < 80; i++){
    const randNum = (Math.floor(Math.random() * 9));
    this.colorArray.push(this.colors[randNum]);
  }
}


ngOnInit() {
  this.fillImageArray();
}

}
