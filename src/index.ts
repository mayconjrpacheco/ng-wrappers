import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app';

//For wrapper tests
import { InputDateWrapperModule } from 'modules/input-date-wrapper'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InputDateWrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
