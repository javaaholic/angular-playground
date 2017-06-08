import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdToolbarModule,
  MdMenuModule,
  MdIconModule,
  MdIconRegistry,
  MdSidenavModule,
} from '@angular/material';

@NgModule({
  exports: [
    MdButtonModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdSidenavModule,
  ],
  providers: [MdIconRegistry],
  declarations: []
})
export class MaterialModule { }
