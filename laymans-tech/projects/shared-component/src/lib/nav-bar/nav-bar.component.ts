import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'projects/core/src/lib/app.constant';
import { BlogService } from 'projects/core/src/lib/service/blog.service';

@Component({
  selector: 'lib-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  topics: any = [];;
  blogName: string = '';
  constructor(private blogService : BlogService) { }

  ngOnInit() {
    this.blogName = AppConstants.BLOG_NAME;
    this.blogService.getMenuLinkList().subscribe(menuLinks=>{
    this.topics=menuLinks
      
    })
    // this.topics = [
    //   'technology',
    //   'design',
    //   'culture',
    //   'business',
    //   'health',
    //   'life',
    //   'diy'
    // ]
  }

}
