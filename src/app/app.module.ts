import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule, declarations } from './app-routing.module';
import { AppComponent } from './app.component';
import { primeng } from './3rd-party';




@NgModule({
  declarations: [
    AppComponent, ...declarations
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...primeng,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
