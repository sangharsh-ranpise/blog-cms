import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'projects/core/src/lib/service/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  showLoader = false;
  private subscription: Subscription;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState.subscribe((status) => {
      this.showLoader = status.show;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
