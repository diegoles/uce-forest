import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ButtonModule, HttpClientModule, TableModule,LoadingBarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
