import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './components/material/material.module';

import { AppComponent } from './app.component';

import { IndexPageComponent } from './routes/index-page/index-page.component';
import { ButtonPageComponent } from './routes/button-page/button-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    ButtonPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
