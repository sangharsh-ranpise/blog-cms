import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() {
  }
  getSelectedBlogsFirstPage(selectedBlogType) {
    return {
      "abc": "abc'"
    }
    // return this.httpClient.get(
    //   'orphan-event/search-prospects?search=' + queryParameter
    // );
  }
}
