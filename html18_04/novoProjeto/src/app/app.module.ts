import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { botaoModule } from './botao/botao.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    botaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
