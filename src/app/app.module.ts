import { CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalculateCurrencyPipe } from './calculate-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalculateCurrencyPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
