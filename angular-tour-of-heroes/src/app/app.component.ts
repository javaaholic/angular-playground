import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">대시보드</a>
      <a routerLink="/heroes">영웅들</a>
    </nav>      
    <router-outlet></router-outlet>
  `
})
export class AppComponent { 
  title = 'Tour of Heroes';
}