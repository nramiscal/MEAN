import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  colorArray = [];

  fillImageArray(){
  for (let i=0; i < 80; i++){
    const randNum = (Math.floor(Math.random() * 10)) + 1;
    if (randNum === 1){
      this.colorArray.push('#FF00FF');
    }
    else if (randNum === 2){
      this.colorArray.push('#00FFFF');
    }
    else if (randNum === 3){
      this.colorArray.push('#7FFF00');
    }
    else if (randNum === 4){
      this.colorArray.push('#8A2BE2');
    }
    else if (randNum === 5){
      this.colorArray.push('#ADFF2F');
    }
    else if (randNum === 6){
      this.colorArray.push('#4B0082');
    }
    else if (randNum === 7){
      this.colorArray.push('#6A5ACD');
    }
    else if (randNum === 8){
      this.colorArray.push('#87CEEB');
    }
    else if (randNum === 9){
      this.colorArray.push('#00FA9A');
    }
    else if (randNum === 10){
      this.colorArray.push('#C71585');
    }
  }
}


ngOnInit() {
  this.fillImageArray();
}

}
