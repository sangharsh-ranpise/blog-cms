import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-layman-tech-content',
  templateUrl: './layman-tech-content.component.html',
  styleUrls: ['./layman-tech-content.component.css']
})
export class LaymanTechContentComponent implements OnInit {
  topicName: string = '';
  firstBlogId: string = ''
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(res => {
      console.log(res);
      this.topicName = res.get('topicName');
    })
    if (this.topicName) {
      this.firstBlogId = 'nodeJs'
    }
  }

}
