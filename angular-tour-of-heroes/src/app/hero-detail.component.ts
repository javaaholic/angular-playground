import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} 자세히 보기!</h2>
      <div><label>아이디: </label>{{hero.id}}</div>
      <div>
          <label>이 &nbsp; &nbsp;름: </label>
          <input [(ngModel)]="hero.name" placeholder="이름을 입력하세요."/>
      </div>
    </div>
  `
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}