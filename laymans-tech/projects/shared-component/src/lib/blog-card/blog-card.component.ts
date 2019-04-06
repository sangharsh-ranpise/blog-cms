import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'lib-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit, OnChanges {
  @Input() blogs: any;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    console.log(this.blogs, 'listOfBlogByTopicId')

  }
}
