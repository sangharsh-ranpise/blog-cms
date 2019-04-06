
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { BlogService } from 'projects/core/src/lib/service/blog.service';
import { LoaderService } from '../service/loader.service';

@Injectable()
export class LaymansTechHttpInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(private loadingService: LoaderService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // console.log("ABCCCCCCCCC")
    this.totalRequests++;
    this.loadingService.show();
    return next.handle(request).pipe(
      tap(res => {
        if (res instanceof HttpResponse) {
          this.decreaseRequests();
        }
      }),
      catchError(err => {
        this.decreaseRequests();
        throw err;
      })
    );
  }

  private decreaseRequests() {
    this.totalRequests--;
    if (this.totalRequests === 0) {
      this.loadingService.hide();
    }
  }
}
