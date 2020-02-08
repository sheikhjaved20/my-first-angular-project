import { Component, OnInit } from '@angular/core';
import { flyInOut } from './../animation';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css'],
  animations: [
    flyInOut
  ]
})
export class PagenotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
