import { Injectable, InjectionToken } from '@angular/core';

export class DocViewerConfig {
  width?: number;
  height?: number;
}
export const DOCVIEWER_CONFIG = new InjectionToken<DocViewerConfig>('doc-viewer.config');
export let DOCVIEWER_CONFIG_DEFAULT: DocViewerConfig = {
    width: 800, // component default width
    height: 600, // component default height
};
