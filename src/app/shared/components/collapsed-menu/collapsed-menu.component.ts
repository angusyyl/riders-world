import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
  selector: 'app-collapsed-menu',
  templateUrl: './collapsed-menu.component.html',
  styleUrls: ['./collapsed-menu.component.css']
})
export class CollapsedMenuComponent implements OnInit {

  isCollapsed = false;

  constructor(private modalService: NzModalService) { }

  ngOnInit() {
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  showUserInfoModal(): void {
    this.modalService.create({
      nzContent: UserInfoComponent,
      nzWrapClassName: "vertical-center-modal"
    });
  }
}
