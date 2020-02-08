import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
  encapsulation: ViewEncapsulation.None,
  animations: [
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'Invision';
  display = false;
  constructor (public router: Router ){}
}
