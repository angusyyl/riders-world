import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  title: string;
  loggedIn: boolean = false;
  username: string = "hi Rider King";
  password: string;
  profilePic: ImageData

  constructor(private modal: NzModalRef) { }

  ngOnInit() {
    if (this.loggedIn) {
      this.title = 'Profile';
    } else {
      this.title = 'Sign Up/ Sign In';
    }
  }

  destroyModal() {
    this.modal.destroy();
  }

}
