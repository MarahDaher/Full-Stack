import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

const PRIME_MODULE = [CardModule, InputTextModule, ButtonModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, PRIME_MODULE],
  exports: [PRIME_MODULE],
})
export class PrimengModule {}
