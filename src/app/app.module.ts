import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChkPtInfoWindowComponent } from './shared/components/chk-pt-info-window/chk-pt-info-window.component';
import { MaterialModule } from './material-module/material-module.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AntDesignModule } from './material-module/ant-design.module';
import { CustomMapControlComponent } from './shared/components/custom-map-control/custom-map-control.component';
import { CollapsedMenuComponent } from './shared/components/collapsed-menu/collapsed-menu.component';
import { PostListComponent } from './shared/components/post-list/post-list.component';
import { SearchComponent } from './shared/components/search/search.component';
import { SettingComponent } from './shared/components/setting/setting.component';
import { NgxUsefulSwiperModule } from 'node_modules/ngx-useful-swiper';
import { UserInfoComponent } from './shared/components/user-info/user-info.component';
import { SignupComponent } from './shared/components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ChkPtInfoWindowComponent,
    CustomMapControlComponent,
    CollapsedMenuComponent,
    PostListComponent,
    SearchComponent,
    SettingComponent,
    UserInfoComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    AntDesignModule,
    BrowserAnimationsModule,
    NgxUsefulSwiperModule
  ],
  entryComponents: [
    ChkPtInfoWindowComponent,
    CustomMapControlComponent,
    UserInfoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
