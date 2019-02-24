import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageBlogComponent } from './home-page-blog.component';

describe('HomePageBlogComponent', () => {
  let component: HomePageBlogComponent;
  let fixture: ComponentFixture<HomePageBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
