import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user = new User();
  users = [];
  success = false;
  errors = [];

  onSubmit(){
    this.users.push(this.user);
    this.user = new User();
  }

  // register() {
  //   if (this.errors.length < 1) {
  //     this.success = true;
  //   }
  // }

}