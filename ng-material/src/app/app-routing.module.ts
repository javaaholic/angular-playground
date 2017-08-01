import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPageComponent } from './routes/index-page/index-page.component';
import { ButtonPageComponent } from './routes/button-page/button-page.component';

const routes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'button', component: ButtonPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
