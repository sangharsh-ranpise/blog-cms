import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadFullBlogComponent } from './read-full-blog.component';

describe('ReadFullBlogComponent', () => {
  let component: ReadFullBlogComponent;
  let fixture: ComponentFixture<ReadFullBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadFullBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadFullBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
