import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Chaild1Component } from './chaild1/chaild1.component';
import { Chaild2Component } from './chaild2/chaild2.component';

@NgModule({
  declarations: [
    AppComponent,
    Chaild1Component,
    Chaild2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
