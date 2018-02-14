import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myList = [
      {'email' : 'Bill@Gates.com',
       'importance' : 'true',
       'subject' : 'New Windows',
       'content' : 'Windows XI' },
       {'email' : 'Ada@Lovelace.com',
        'importance' : 'true',
        'subject' : 'Programming',
        'content' : 'Enchantress of Numbers' },
        {'email' : 'john@carmac.com',
         'importance' : 'false',
         'subject' : 'Updated Algo',
         'content' : 'New algorithm...' },
         {'email' : 'gabe@newel.com',
          'importance' : 'false',
          'subject' : 'HL3!',
          'content' : 'Just kidding...' },
  ];
}
