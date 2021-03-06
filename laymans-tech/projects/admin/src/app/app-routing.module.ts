import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminBodyComponent } from './admin-body/admin-body.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateMenuLinkComponent } from './create-menu-link/create-menu-link.component';
import { AllBlogComponent } from './all-blog/all-blog.component';


const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'list/blogs/:menuLinkId',
        component: AllBlogComponent
      },
      {
        path: 'list/blogs',
        component: BlogListComponent
      }, {
        path: 'create-menu-link',
        component: CreateMenuLinkComponent
      }, {
        path: '**',
        component: BlogListComponent
      }
    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
