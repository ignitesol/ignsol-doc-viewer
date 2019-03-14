
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { DocumentViewerComponent } from './doc-viewer.component';
import { SafePipe } from './../services/safe.pipe';
import { DOCVIEWER_CONFIG, DOCVIEWER_CONFIG_DEFAULT } from './doc-viewer.config';

import { ImageViewerModule as pdfViewerModule} from '@hallysonh/ngx-imageviewer';
import { ImageViewerModule } from 'ngx-image-viewer';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  providers: [
    { provide: DOCVIEWER_CONFIG, useValue: DOCVIEWER_CONFIG_DEFAULT }
  ],
  imports: [
    BrowserModule,
    ImageViewerModule,
    BrowserAnimationsModule,
    pdfViewerModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    DocumentViewerComponent,
    SafePipe
   ],
  exports: [DocumentViewerComponent],
})
export class DocumentViewerModule { }
