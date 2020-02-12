import { NgModule } from '@angular/core';
import { PortfolioComponent } from './portfolio.component';
import { AboutMeComponent } from './about-me/about-me.component';



@NgModule({
  declarations: [PortfolioComponent, AboutMeComponent],
  imports: [
  ],
  exports: [PortfolioComponent,AboutMeComponent]
})
export class PortfolioModule { }
