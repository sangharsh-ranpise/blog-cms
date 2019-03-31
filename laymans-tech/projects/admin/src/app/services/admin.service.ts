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
  createBlog(newBlogContent: any) {
    const blogContent = {
      newBlogContent
    }
    return this.httpClient.post(
      'http://localhost:8000/laymans-tech/blog/create/blog/', blogContent
    );
  }

  updateBlog(updateBlogContent: any) {
    const blogContent = {
      updateBlogContent
    }
    return this.httpClient.post(
      'http://localhost:8000/laymans-tech/blog/update/blog/', blogContent
    );
  }
}
