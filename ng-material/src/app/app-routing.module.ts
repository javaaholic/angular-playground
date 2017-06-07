import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './router-outlet/index/index.component';
import { ButtonPageComponent } from './router-outlet/button-page/button-page.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'button', component: ButtonPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
