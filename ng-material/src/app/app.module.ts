import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { IndexComponent } from './router-outlet/index/index.component';
import { ButtonPageComponent } from './router-outlet/button-page/button-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SidebarComponent,
    IndexComponent,
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
