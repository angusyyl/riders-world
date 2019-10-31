import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChkPtInfoWindowComponent } from './shared/components/chk-pt-info-window/chk-pt-info-window.component';
import { MaterialModule } from './material-module/material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AntDesignModule } from './material-module/ant-design.module';
import { CustomMapControlComponent } from './shared/components/custom-map-control/custom-map-control.component';
import { CollapsedMenuComponent } from './shared/components/collapsed-menu/collapsed-menu.component';
import { PostListComponent } from './shared/components/post-list/post-list.component';
import { MapComponent } from './shared/components/map/map.component';
import { SettingComponent } from './shared/components/setting/setting.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { UserInfoComponent } from './shared/components/user-info/user-info.component';
import { SignupComponent } from './shared/components/signup/signup.component';
import { fakeBackendProvider, JwtInterceptor, ErrorInterceptor } from './shared/helpers';
import { SigninComponent } from './shared/components/signin/signin.component';
import { GpsMapControlComponent } from './shared/components/gps-map-control/gps-map-control.component';

@NgModule({
  declarations: [
    AppComponent,
    ChkPtInfoWindowComponent,
    CustomMapControlComponent,
    CollapsedMenuComponent,
    PostListComponent,
    MapComponent,
    SettingComponent,
    UserInfoComponent,
    SignupComponent,
    SigninComponent,
    GpsMapControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    AntDesignModule,
    BrowserAnimationsModule,
    NgxUsefulSwiperModule
  ],
  entryComponents: [
    ChkPtInfoWindowComponent,
    CustomMapControlComponent,
    GpsMapControlComponent,
    UserInfoComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
