import { Component, OnInit } from '@angular/core';
import { BlogService } from 'projects/core/src/lib/service/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogMenus: any;
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getMenuLinkList().subscribe(res => {
      this.blogMenus = res;
      console.log(res)
    })
  }

}
