import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [ProfileFormComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
