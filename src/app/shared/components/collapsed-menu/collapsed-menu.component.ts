import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsed-menu',
  templateUrl: './collapsed-menu.component.html',
  styleUrls: ['./collapsed-menu.component.css']
})
export class CollapsedMenuComponent implements OnInit {

  isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
