import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminBodyComponent } from './admin-body/admin-body.component';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateMenuLinkComponent } from './create-menu-link/create-menu-link.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from 'projects/core/src/public_api';
import { AllBlogComponent } from './all-blog/all-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminNavComponent,
    AdminBodyComponent,
    BlogListComponent,
    DashboardComponent,
    CreateMenuLinkComponent,
    AllBlogComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
