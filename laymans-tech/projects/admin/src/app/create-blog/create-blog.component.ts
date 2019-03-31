import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit, OnChanges {
  blogFormGroup: FormGroup;
  paragraphs: FormArray;
  createBlogContent: any;

  @Input() blogMenus: any;
  @Input() selectedBlogType: any = {};
  @Input() selectedBlog: any;
  @Input() isUpdateBlog: boolean;
  @Output() isBlogCreated: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private adminService: AdminService,
    private fb: FormBuilder

  ) { }

  ngOnInit() {
    this.createBlogFormGroup(this.selectedBlog);
    console.log(this.selectedBlog)
  }

  ngOnChanges() {
    console.log("CHANGED")
  }
  createBlogFormGroup(selectedBlog) {
    this.blogFormGroup = this.fb.group({
      mainHeader: [(selectedBlog && selectedBlog.mainHeader && this.isUpdateBlog) ? selectedBlog.mainHeader : '', Validators.required],
      writerName: [(selectedBlog && selectedBlog.writerDetails && selectedBlog.writerDetails['writerName'] && this.isUpdateBlog) ? selectedBlog.writerDetails['writerName'] : '', Validators.required],
      aboutWriter: [(selectedBlog && selectedBlog.writerDetails && selectedBlog.writerDetails['aboutWriter'] && this.isUpdateBlog) ? selectedBlog.writerDetails['aboutWriter'] : ''],
      paragraphs: this.fb.array((selectedBlog && selectedBlog.paragraphs && this.isUpdateBlog) ? [] : [this.createNewParagraph()])
    });

    if (selectedBlog && selectedBlog.paragraphs && this.isUpdateBlog) {
      // selectedBlog.paragraphs.push(selectedBlog.paragraphs);
      console.log(selectedBlog.paragraphs)
      this.setParagraphs(selectedBlog.paragraphs);

    }
  }

  setParagraphs(paragraphs) {
    this.paragraphs = (<FormArray>(
      this.blogFormGroup.get('paragraphs')
    )) as FormArray;
    paragraphs.map(paragraph => {
      this.paragraphs.push(this.createNewParagraph(paragraph));
    });
  }

  createNewParagraph(paragraph?) {
    return this.fb.group({
      paraImg: '',
      paraHeading: [(paragraph && paragraph.paraHeading && this.isUpdateBlog) ? paragraph.paraHeading : ''],
      paraBody: [(paragraph && paragraph.paraBody && this.isUpdateBlog) ? paragraph.paraBody : '']
    });
  }

  addNewParagraph() {
    this.paragraphs = this.blogFormGroup.get('paragraphs') as FormArray;
    this.paragraphs.push(this.createNewParagraph());
  }

  onSubmit() {
    this.selectedBlogType = this.blogMenus.find(blog => blog.id === this.selectedBlogType['id']);
    console.log(this.blogMenus)
    this.selectedBlogType = {
      id: this.selectedBlogType['id'],
      navBarName: this.selectedBlogType['navBarName']

    }
    if (this.blogFormGroup.valid) {
      this.createBlogContent = this.blogFormGroup.value;
      this.createBlogContent['blogType'] = this.selectedBlogType;
      if (!this.isUpdateBlog) {
        this.createBlogContent['blogCreationDate'] = new Date().getTime();
        this.adminService.createBlog(this.createBlogContent).subscribe(newBlog => {
          this.isBlogCreated.emit({ status: true })
          this.blogFormGroup.reset();
        })
      } else {
        this.createBlogContent['id'] = this.selectedBlog.id;
        this.createBlogContent['updatedAt'] = new Date().getTime();
        console.log('update', this.createBlogContent)
        this.adminService.updateBlog(this.createBlogContent).subscribe(newBlog => {
          this.isBlogCreated.emit({ status: true })
          this.blogFormGroup.reset();
        })
      }

    }
  }
  goBackToBlogsMenuLink() {
    this.isBlogCreated.emit({ status: true })
  }
}
