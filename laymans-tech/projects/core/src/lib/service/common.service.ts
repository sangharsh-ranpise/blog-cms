import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  private subject = new Subject<any>();
  setMenuLink(menuLinkId: string) {
    this.subject.next({ menuLinkId: menuLinkId });
  }

  clearMenuLinkId() {
    this.subject.next();
  }

  getMenuLinkId(): Observable<any> {
    return this.subject.asObservable();
  }
}
