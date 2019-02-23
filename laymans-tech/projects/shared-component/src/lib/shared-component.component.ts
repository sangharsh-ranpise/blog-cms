import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shared-component',
  template: `
    <p>
      shared-component works!
    </p>
  `,
  styles: []
})
export class SharedComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
