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

@NgModule({
  declarations: [SharedComponentComponent, NavBarComponent, LaymanTechContentComponent, PageNotFoundComponent, FirstBlogComponent, AllTopicsCardComponent, HomePageBlogComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SharedComponentComponent, NavBarComponent, LaymanTechContentComponent, FirstBlogComponent, HomePageBlogComponent]
})
export class SharedComponentModule { }
