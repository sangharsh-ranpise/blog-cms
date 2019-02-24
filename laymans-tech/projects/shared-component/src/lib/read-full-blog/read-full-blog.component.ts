import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-read-full-blog',
  templateUrl: './read-full-blog.component.html',
  styleUrls: ['./read-full-blog.component.css']
})
export class ReadFullBlogComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(res => {
      console.log(res);
    })
  }

}
