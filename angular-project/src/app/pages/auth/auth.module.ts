import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PrimengModule } from '../../shared/modules/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimengModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
