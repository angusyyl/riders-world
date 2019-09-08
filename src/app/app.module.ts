import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChkPtInfoWindowComponent } from './chk-pt-info-window/chk-pt-info-window.component';
import { MaterialModule } from './material-module/material-module.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AntDesignModule } from './material-module/ant-design.module';
import { CustomMapControlComponent } from './custom-map-control/custom-map-control.component';


@NgModule({
  declarations: [
    AppComponent,
    ChkPtInfoWindowComponent,
    CustomMapControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    AntDesignModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    ChkPtInfoWindowComponent,
    CustomMapControlComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
