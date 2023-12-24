import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './modules/primeng.module';
import { FormInputComponent } from './components/form-input/form-input.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, PrimengModule, FormInputComponent],
  exports: [PrimengModule, FormInputComponent],
})
export class SharedModule {}
