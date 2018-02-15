import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InputDateWrapperComponent } from './input-date-wrapper';
import { InputDateWrapperController } from './controller';

@NgModule({
  declarations: [
    InputDateWrapperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputDateWrapperComponent
  ],
  providers: [InputDateWrapperController]
})
export class InputDateWrapperModule { }
