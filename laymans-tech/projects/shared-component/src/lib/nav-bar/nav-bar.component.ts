import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'projects/core/src/lib/app.constant';

@Component({
  selector: 'lib-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  topics: any = [];;
  blogName: string = '';
  constructor() { }

  ngOnInit() {
    this.blogName = AppConstants.BLOG_NAME;
    this.topics = [
      'technology',
      'culture',
      'Life'
    ]
  }

}
