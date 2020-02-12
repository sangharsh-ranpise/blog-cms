import { NgModule } from '@angular/core';
import { PortfolioComponent } from './portfolio.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [PortfolioComponent, AboutMeComponent, WorkHistoryComponent, EducationComponent, SkillsComponent],
  imports: [
  ],
  exports: [PortfolioComponent]
})
export class PortfolioModule { }
