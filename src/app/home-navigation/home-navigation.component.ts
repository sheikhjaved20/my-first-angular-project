import { Component, OnInit } from '@angular/core';
import { flyInOut } from './../animation';

@Component({
  selector: 'app-home-navigation',
  templateUrl: './home-navigation.component.html',
  styleUrls: ['./home-navigation.component.css'],
  animations: [
    flyInOut
  ]
})
export class HomeNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
