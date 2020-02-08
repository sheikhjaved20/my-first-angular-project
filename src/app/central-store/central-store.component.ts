import { Component, OnInit } from '@angular/core';
import { flyInOut } from './../animation';

@Component({
  selector: 'app-central-store',
  templateUrl: './central-store.component.html',
  styleUrls: ['./central-store.component.css'],
  animations: [
    flyInOut
  ]
})
export class CentralStoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
