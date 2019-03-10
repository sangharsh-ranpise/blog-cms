import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminBodyComponent } from './admin-body/admin-body.component';


const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AdminBodyComponent
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
