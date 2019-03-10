import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminBodyComponent } from './admin-body/admin-body.component';
import { BlogListComponent } from './blog-list/blog-list.component';


const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list/blogs',
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