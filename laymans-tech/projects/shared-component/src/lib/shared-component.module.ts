import { NgModule } from '@angular/core';
import { SharedComponentComponent } from './shared-component.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LaymanTechContentComponent } from './layman-tech-content/layman-tech-content.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FirstBlogComponent } from './first-blog/first-blog.component';
import { AllTopicsCardComponent } from './all-topics-card/all-topics-card.component';
import { HomePageBlogComponent } from './home-page-blog/home-page-blog.component';
import { ReadFullBlogComponent } from './read-full-blog/read-full-blog.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { CoverPageComponent } from './cover-page/cover-page.component';

@NgModule({
  declarations: [
    SharedComponentComponent,
    NavBarComponent,
    LaymanTechContentComponent,
    PageNotFoundComponent,
    FirstBlogComponent,
    AllTopicsCardComponent,
    HomePageBlogComponent,
    ReadFullBlogComponent,
    BlogCardComponent,
    CoverPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SharedComponentComponent,
    NavBarComponent,
    LaymanTechContentComponent,
    FirstBlogComponent,
    HomePageBlogComponent,
    ReadFullBlogComponent,
    CoverPageComponent
  ]
})
export class SharedComponentModule { }
