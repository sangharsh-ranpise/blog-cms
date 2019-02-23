import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  topics: any = [];;
  constructor() { }

  ngOnInit() {
    this.topics = [
      'technology',
      'culture',
      'Life'
    ]
  }

}
