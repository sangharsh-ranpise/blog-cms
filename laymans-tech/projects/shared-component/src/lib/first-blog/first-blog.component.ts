import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'projects/core/src/lib/service/common.service';
import { Subscription } from 'rxjs';
import { BlogService } from 'projects/core/src/lib/service/blog.service';

@Component({
  selector: 'lib-first-blog',
  templateUrl: './first-blog.component.html',
  styleUrls: ['./first-blog.component.css']
})
export class FirstBlogComponent implements OnInit, OnDestroy {

  @Input() id: any = ''
  @Input() latestBlog: any;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService,
    private blogService: BlogService

  ) {
    this.subscription = this.commonService.getMenuLinkId().subscribe(res => {
      console.log("Array yar", res)
      this.getLatestBlogByTopicName(res.menuLinkId)
    })

  }

  ngOnInit() {
    this.route.paramMap.subscribe(res => {
      // this.topicName = res.get('topicName');
      // this.topicId = res.get('topicId');
      // console.log(res)
    });
  }

  getLatestBlogByTopicName(topicId) {
    this.blogService.getLatestBlogByTopicName(topicId).subscribe(latestBlog => {
      this.latestBlog = latestBlog;
      console.log(this.latestBlog)
      // this.blogUpdatedAt = {
      //   date: new Date(this.latestBlog.updatedAt).getDate(),
      //   month: new Date(this.latestBlog.updatedAt).getMonth() + 1,
      //   year: new Date(this.latestBlog.updatedAt).getUTCFullYear()
      // };
    })
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
