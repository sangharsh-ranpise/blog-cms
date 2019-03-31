import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) {
  }
  getSelectedBlogsFirstPage(selectedBlogType) {
    return {
      "abc": "abc'"
    }
    // return this.httpClient.get(
    //   'orphan-event/search-prospects?search=' + queryParameter
    // );
  }

  getMenuLinkList() {
    return this.httpClient.get(
      'http://localhost:8000/laymans-tech/blog/menu-list/'
    );
  }

  getAllBlogs(blogTypeId) {
    return this.httpClient.get(
      `http://localhost:8000/laymans-tech/blog/list/${blogTypeId}`
    );
  }
  getBlogById(specificBlogIdUnderBlogType) {
    return this.httpClient.get(
      `http://localhost:8000/laymans-tech/blog/${specificBlogIdUnderBlogType}`
    );
  }

  getLatestBlogByTopicName(topicId) {
    return this.httpClient.get(
      `http://localhost:8000/laymans-tech/blog/topicId/${topicId}`
    );
  }
}
