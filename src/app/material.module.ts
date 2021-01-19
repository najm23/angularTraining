import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


const MATERIAL_MODULE = [
  MatToolbarModule,
  MatButtonModule
]
@NgModule({
  exports:[
    ...MATERIAL_MODULE
  ]

})
export class MaterialModule { }
