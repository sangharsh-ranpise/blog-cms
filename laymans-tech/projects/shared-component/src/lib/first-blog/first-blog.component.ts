import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-first-blog',
  templateUrl: './first-blog.component.html',
  styleUrls: ['./first-blog.component.css']
})
export class FirstBlogComponent implements OnInit {

  @Input() id: any = ''
  @Input() latestBlog: any;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(res => {
      // this.topicName = res.get('topicName');
      // this.topicId = res.get('topicId');
      // console.log(res)
    });
  }

}
