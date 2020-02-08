import { Component, OnInit } from '@angular/core';
import { flyInOut } from './../animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    flyInOut
  ]
})
export class HomeComponent implements OnInit {
  div1 = false;
  div2 = true;
  constructor() { }

  ngOnInit() {
  }

 
  showHdeDiv(){
    this.div1 = !this.div1;
    this.div2 = !this.div2;
  }
}
