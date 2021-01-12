import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-sidebar-icons',
  templateUrl: './sidebar-icons.component.html',
  styleUrls: ['./sidebar-icons.component.scss']
})
export class SidebarIconsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    Feather.replace();
  }

}
