import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  title: string;
  currentUser: any;
  username = 'hi Rider King';
  password: string;
  profilePic: ImageData;

  constructor(private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {

    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      this.title = 'Profile';
    } else {
      // not logged in so redirect to signin page with the return url
      this.router.navigate(['/signin']);
    }
  }
}
