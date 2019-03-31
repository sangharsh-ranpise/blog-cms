import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'projects/core/src/lib/service/blog.service';

@Component({
  selector: 'lib-layman-tech-content',
  templateUrl: './layman-tech-content.component.html',
  styleUrls: ['./layman-tech-content.component.css']
})
export class LaymanTechContentComponent implements OnInit, OnChanges {
  topicName: string = '';
  firstBlogId: string = ''
  topicId: string = '';
  latestBlog: any;
  constructor(private route: ActivatedRoute,
    private blogService: BlogService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(res => {
      this.topicName = res.get('topicName');
      this.topicId = res.get('topicId');
    });
    this.blogService.getLatestBlogByTopicName(this.topicId).subscribe(latestBlog => {
      this.latestBlog = latestBlog;
    })
    if (this.topicName) {
      this.firstBlogId = 'nodeJs'
    }
  }

  ngOnChanges() {
    console.log("DETECTeD")
  }

}
