import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule
  ],
  exports: [CoreComponent]
})
export class CoreModule { }
