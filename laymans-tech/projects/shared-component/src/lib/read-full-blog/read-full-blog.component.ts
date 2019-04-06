import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'projects/core/src/lib/service/blog.service';
import { CommonService } from 'projects/core/src/lib/service/common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-read-full-blog',
  templateUrl: './read-full-blog.component.html',
  styleUrls: ['./read-full-blog.component.css']
})
export class ReadFullBlogComponent implements OnInit {
  urlParams: any;
  latestBlog: any;
  blogUpdatedAt: any;

  constructor(private route: ActivatedRoute,
    private blogService: BlogService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(res => {
      this.urlParams = res['params']
    })

    this.getLatestBlogByTopicName(this.urlParams.topicId)
  }

  getLatestBlogByTopicName(topicId) {
    this.blogService.getLatestBlogByTopicName(topicId).subscribe(latestBlog => {
      console.log(latestBlog)
      this.latestBlog = latestBlog;
      this.blogUpdatedAt = {
        date: new Date(this.latestBlog.updatedAt).getDate(),
        month: new Date(this.latestBlog.updatedAt).getMonth() + 1,
        year: new Date(this.latestBlog.updatedAt).getUTCFullYear()
      };
    })
  }

}
