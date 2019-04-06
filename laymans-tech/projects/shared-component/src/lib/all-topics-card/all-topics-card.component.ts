import { Component, OnInit } from '@angular/core';
import { BlogService } from 'projects/core/src/lib/service/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-all-topics-card',
  templateUrl: './all-topics-card.component.html',
  styleUrls: ['./all-topics-card.component.css']
})
export class AllTopicsCardComponent implements OnInit {
  selectedTopic: any = [];
  listOfBlogByTopicId: any;
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(res => {
      this.selectedTopic = res['params']
      this.blogService.getAllBlogs(this.selectedTopic.topicId).subscribe(res => {
        this.listOfBlogByTopicId = res
        if (this.listOfBlogByTopicId.length > 1) {
          this.listOfBlogByTopicId = this.listOfBlogByTopicId.slice(1)
        } else {
          this.listOfBlogByTopicId = [];
        }
      })
    });


  }

}
