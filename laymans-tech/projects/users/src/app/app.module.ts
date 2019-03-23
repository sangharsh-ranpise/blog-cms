import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedComponentModule } from 'projects/shared-component/src/public_api';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'projects/core/src/public_api';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LaymansTechHttpInterceptor } from 'projects/core/src/lib/auth/LaymansTechHttpInterceptor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedComponentModule,
    CoreModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LaymansTechHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
