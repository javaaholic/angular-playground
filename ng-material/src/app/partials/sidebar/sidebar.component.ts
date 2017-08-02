import { Component, OnInit, EventEmitter, ViewChild, Output } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @ViewChild(MdSidenav) sidenav: MdSidenav;
  @Output() liftSidenav = new EventEmitter<MdSidenav>();
  @Output() closeSidebar = new EventEmitter<void>();

  ngOnInit() {
    this.liftSidenav.emit(this.sidenav);
  }

  close() {
    this.closeSidebar.emit();
  }

}
