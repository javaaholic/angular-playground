import { MdSidenav } from '@angular/material';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() openSidebar = new EventEmitter<void>();

  constructor() { }

  ngOnInit() { }

  open() {
    this.openSidebar.emit();
  }

}
