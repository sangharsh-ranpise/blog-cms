import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-first-blog',
  templateUrl: './first-blog.component.html',
  styleUrls: ['./first-blog.component.css']
})
export class FirstBlogComponent implements OnInit {

  @Input() id: any = ''
  constructor() { }

  ngOnInit() {
  }

}