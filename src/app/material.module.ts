import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

const MATERIAL_MODULE = [
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule
]
@NgModule({
  exports:[
    ...MATERIAL_MODULE
  ]

})
export class MaterialModule { }
