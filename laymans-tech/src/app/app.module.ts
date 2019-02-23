import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedComponentModule } from 'projects/shared-component/src/public_api';
import { AppRoutingModule } from './app.routes';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'projects/core/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedComponentModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
