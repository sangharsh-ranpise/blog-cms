import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LaymanTechContentComponent } from 'projects/shared-component/src/lib/layman-tech-content/layman-tech-content.component';
import { PageNotFoundComponent } from 'projects/shared-component/src/lib/page-not-found/page-not-found.component';
import { ReadFullBlogComponent } from 'projects/shared-component/src/lib/read-full-blog/read-full-blog.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ReadFullBlogComponent
      },
      {
        path: 'topic/:topicName/:topicId',
        component: ReadFullBlogComponent
      },
      {
        path: 'topic/:topicName',
        component: LaymanTechContentComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
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
