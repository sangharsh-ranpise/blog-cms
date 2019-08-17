import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LaymansTechHttpInterceptor } from './auth/LaymansTechHttpInterceptor';

@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LaymansTechHttpInterceptor,
      multi: true
    }
  ],
  exports: [CoreComponent]
})
export class CoreModule { }
