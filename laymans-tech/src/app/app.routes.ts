import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LaymanTechContentComponent } from 'projects/shared-component/src/lib/layman-tech-content/layman-tech-content.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: LaymanTechContentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
