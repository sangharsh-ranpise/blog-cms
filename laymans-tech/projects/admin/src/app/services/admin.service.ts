import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  createMenuLink(menuLink: any) {
    return this.httpClient.post(
      'http://localhost:8000/laymans-tech/blog/create/menu-link/', menuLink
    );
  }
}
