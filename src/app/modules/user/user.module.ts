import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [ProfileFormComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
