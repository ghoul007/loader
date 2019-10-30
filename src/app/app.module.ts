import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContentLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
