import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { BlogService } from 'projects/core/src/lib/service/blog.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-all-blog',
  templateUrl: './all-blog.component.html',
  styleUrls: ['./all-blog.component.css']
})
export class AllBlogComponent implements OnInit {
  blogFormGroup: FormGroup;
  paragraphs: FormArray;
  isCreateBlogForm: Boolean = false;
  blogMenus: any;
  selectedBlogType = {};
  createBlogContent: any;
  blogList: any;
  specificBlogIdUnderBlogType: any
  selectedBlog: any;
  isUpdateBlog: boolean = false;
  constructor(
    private blogService: BlogService,
    private adminService: AdminService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.blogService.getMenuLinkList().subscribe(res => {
      this.blogMenus = res;
    })
    this.route.params.subscribe(res => {
      this.selectedBlogType['id'] = res.menuLinkId;
      this.getAllBlogs(this.selectedBlogType['id'])
    })

  }

  createBlog() {
    this.isCreateBlogForm = true;
    this.isUpdateBlog = false;
    console.log(this.isUpdateBlog)
  }

  // createNewParagraph() {
  //   return this.fb.group({
  //     paraImg: '',
  //     paraHeading: '',
  //     paraBody: ''
  //   });
  // }

  // addNewParagraph() {
  //   this.paragraphs = this.blogFormGroup.get('paragraphs') as FormArray;
  //   this.paragraphs.push(this.createNewParagraph());
  // }

  getAllBlogs(blogTypeId) {
    this.blogService.getAllBlogs(blogTypeId).subscribe(blogList => {
      this.blogList = blogList;
    })
  }
  // onSubmit() {
  //   this.selectedBlogType = this.blogMenus.find(blog => blog.id === this.selectedBlogType['id']);
  //   this.selectedBlogType = {
  //     id: this.selectedBlogType['id'],
  //     navBarName: this.selectedBlogType['navBarName']

  //   }
  //   if (this.blogFormGroup.valid) {
  //     this.createBlogContent = this.blogFormGroup.value;
  //     this.createBlogContent['blogType'] = this.selectedBlogType;
  //     this.createBlogContent['blogCreationDate'] = new Date().getTime();
  //     this.adminService.createBlog(this.createBlogContent).subscribe(newBlog => {
  //       this.blogFormGroup.reset();
  //     })

  //   }
  // }

  goBackToBlogsMenuLink() {
    this.isCreateBlogForm = false;
  }
  getBlog(blog, index) {
    this.selectedBlog = blog;
    this.isCreateBlogForm = true;
    this.isUpdateBlog = true;
    console.log(blog, index)
    // this.blogService.getBlogById(blog.id).subscribe(specificBlogIdUnderBlogType => {
    //   this.specificBlogIdUnderBlogType = specificBlogIdUnderBlogType;
    //   console.log(specificBlogIdUnderBlogType)
    // })
  }

  isBlogCreated(event) {
    this.isCreateBlogForm = false;
    this.getAllBlogs(this.selectedBlogType['id'])
  }
}
