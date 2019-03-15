import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { ImageViewerModule as pdfViewerModule} from '@hallysonh/ngx-imageviewer';
import { ImageViewerModule } from 'ngx-image-viewer';

import { IgnsolDocViewerComponent } from './ignsol-doc-viewer.component';

@NgModule({
  imports: [
    ImageViewerModule,
    BrowserAnimationsModule,
    pdfViewerModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [IgnsolDocViewerComponent],
  exports: [IgnsolDocViewerComponent]
})
export class IgnsolDocViewerModule { }