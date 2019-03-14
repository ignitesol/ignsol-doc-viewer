import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { DocumentViewerModule } from './documentViewer/doc-viewer.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DocumentViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
