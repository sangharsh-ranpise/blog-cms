import { NgModule } from '@angular/core';
import { PortfolioComponent } from './portfolio.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreModule } from 'projects/core/src/public_api';



@NgModule({
  declarations: [PortfolioComponent, AboutMeComponent, WorkHistoryComponent, EducationComponent, SkillsComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
  ],
  exports: [PortfolioComponent]
})
export class PortfolioModule { }
