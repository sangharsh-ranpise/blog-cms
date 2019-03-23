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
  selectedBlog = {};
  createBlogContent: any;
  blogList: any;
  specificBlogIdUnderBlogType: any
  constructor(
    private blogService: BlogService,
    private adminService: AdminService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.blogService.getMenuLinkList().subscribe(res => {
      this.blogMenus = res;
      // console.log(res)
    })
    this.route.params.subscribe(res => {
      this.selectedBlog['id'] = res.menuLinkId;
      this.getAllBlogs(this.selectedBlog['id'])
      // console.log(res)
    })
    this.createBlogFormGroup();

  }


  createBlogFormGroup() {
    this.blogFormGroup = this.fb.group({
      mainHeader: ['', Validators.required],
      writerName: ['', Validators.required],
      aboutWriter: [''],
      paragraphs: this.fb.array([this.createNewParagraph()])
    })
  }
  createBlog() {
    this.isCreateBlogForm = true;

  }

  createNewParagraph() {
    return this.fb.group({
      paraImg: '',
      paraHeading: '',
      paraBody: ''
    });
  }

  addNewParagraph() {
    this.paragraphs = this.blogFormGroup.get('paragraphs') as FormArray;
    this.paragraphs.push(this.createNewParagraph());
  }

  getAllBlogs(blogTypeId) {
    this.blogService.getAllBlogs(blogTypeId).subscribe(blogList => {
      this.blogList = blogList;
    })
  }
  onSubmit() {
    this.selectedBlog = this.blogMenus.find(blog => blog.id === this.selectedBlog['id']);
    this.selectedBlog = {
      id: this.selectedBlog['id'],
      navBarName: this.selectedBlog['navBarName']

    }
    if (this.blogFormGroup.valid) {
      this.createBlogContent = this.blogFormGroup.value;
      this.createBlogContent['blogType'] = this.selectedBlog;
      this.createBlogContent['blogCreationDate'] = new Date().getTime();
      this.adminService.createBlog(this.createBlogContent).subscribe(newBlog => {
        this.blogFormGroup.reset();
      })

    }
  }

  goBackToBlogsMenuLink() {
    this.isCreateBlogForm = false;
  }
  getBlog(blog, index) {
    console.log(blog, index)
    // this.blogService.getBlogById(blog.id).subscribe(specificBlogIdUnderBlogType => {
    //   this.specificBlogIdUnderBlogType = specificBlogIdUnderBlogType;
    //   console.log(specificBlogIdUnderBlogType)
    // })
  }
}
