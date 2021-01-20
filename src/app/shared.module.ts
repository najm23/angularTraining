import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  exports: [
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class SharedModule { }
