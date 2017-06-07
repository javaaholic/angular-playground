import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdToolbarModule,
  MdMenuModule,
  MdIconModule,
  MdIconRegistry,
} from '@angular/material';

@NgModule({
  exports: [
    MdButtonModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
  ],
  providers: [MdIconRegistry],
  declarations: []
})
export class MaterialModule { }
