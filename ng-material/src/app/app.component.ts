import { Component, ViewChild, trigger, state, style, transition, animate } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('sidenavState', [
      state('open', style({
        opacity: 1,
        visibility: 'visible'
      })),
      state('close', style({
        opacity: 0,
        visibility: 'hidden'
      })),
      transition('close <=> open', animate('300ms ease-out')),
    ]),
  ],
})
export class AppComponent {

  sidenav: MdSidenav;
  sidenavState = 'close';

  // toggleSidebar() {
  //   const sidenav = this.sidenav;
  //   this.sidenavState = sidenav._isOpened || sidenav._isOpening ? 'close' : 'open';
  //   sidenav.toggle();
  // }

  openSidebar() {
    this.sidenavState = 'open';
    this.sidenav.open();
  }

  closeSidebar() {
    this.sidenavState = 'close';
    this.sidenav.close();
  }

}
