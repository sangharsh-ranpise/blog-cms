import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-layman-tech-content',
  templateUrl: './layman-tech-content.component.html',
  styleUrls: ['./layman-tech-content.component.css']
})
export class LaymanTechContentComponent implements OnInit {
  topicName: string = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("OK")
    this.route.paramMap.subscribe(res => {
      this.topicName = res.get('topicName');
      console.log(res);
    })
  }

}
