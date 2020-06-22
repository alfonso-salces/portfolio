import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { BackOfficeRoutingModule } from './backoffice.router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    SharedModule
  ]
})
export class BackofficeModule { }
