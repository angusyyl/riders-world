import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChkPtInfoWindowComponent } from './chk-pt-info-window/chk-pt-info-window.component'
import { MaterialModule } from './material-module/material-module.module';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ChkPtInfoWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  entryComponents: [ChkPtInfoWindowComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
