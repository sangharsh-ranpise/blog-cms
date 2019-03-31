import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'projects/core/src/lib/service/blog.service';

@Component({
  selector: 'lib-read-full-blog',
  templateUrl: './read-full-blog.component.html',
  styleUrls: ['./read-full-blog.component.css']
})
export class ReadFullBlogComponent implements OnInit, OnChanges {
  urlParams: any;
  latestBlog: any;
  blogUpdatedAt: any;
  constructor(private route: ActivatedRoute,
    private blogService: BlogService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(res => {
      this.urlParams = res['params']
    })
    this.blogService.getLatestBlogByTopicName(this.urlParams.topicId).subscribe(latestBlog => {
      this.latestBlog = latestBlog;
      this.blogUpdatedAt = {
        date: new Date(this.latestBlog.updatedAt).getDate(),
        month: new Date(this.latestBlog.updatedAt).getMonth() + 1,
        year: new Date(this.latestBlog.updatedAt).getUTCFullYear()
      };
      console.log(this.latestBlog)
    })
  }

  ngOnChanges() {
    console.log("DETECTED")
  }

}
