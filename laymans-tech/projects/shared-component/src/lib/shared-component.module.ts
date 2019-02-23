import { NgModule } from '@angular/core';
import { SharedComponentComponent } from './shared-component.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LaymanTechContentComponent } from './layman-tech-content/layman-tech-content.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SharedComponentComponent, NavBarComponent, LaymanTechContentComponent],
  imports: [
    RouterModule
  ],
  exports: [SharedComponentComponent, NavBarComponent, LaymanTechContentComponent]
})
export class SharedComponentModule { }
