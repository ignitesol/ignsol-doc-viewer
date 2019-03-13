import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { MediaViewerComponent } from './mediaViewer/media-viewer.component';
import { SafePipe } from './services/safe.pipe';
import { ImageViewerModule as pdfViewerModule} from '@hallysonh/ngx-imageviewer';
import { ImageViewerModule } from 'ngx-image-viewer';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MediaViewerComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    ImageViewerModule.forRoot(),
    BrowserAnimationsModule,
    MatTabsModule,
    pdfViewerModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
