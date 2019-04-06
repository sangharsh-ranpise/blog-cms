import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'projects/core/src/lib/service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'users';
  HTTPActivity;
  constructor(private loaderService: LoaderService) {
  }

  ngOnInit() {
    // console.log("ABBBBBBBBBBBBBB")
    this.loaderService.loaderState.subscribe((status) => {
      this.HTTPActivity = status;
    });
  }
}

