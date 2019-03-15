import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'enl-ignsol-doc-viewer',
  templateUrl: './ignitesol-doc-viewer.component.html',
  styleUrls: ['./ignitesol-doc-viewer.component.scss']
})
export class IgnsolDocViewerComponent implements OnInit {
  private src: any;
  @Input()
  index = 0;

  @Output()
  indexChange: EventEmitter<number> = new EventEmitter();
  images: any;
  canvasWidth: number;
  canvasHeight: number;
  media: any;
  enablePrevBtn: boolean;
  enableNextBtn: boolean;
  noMediaText: string;
  get _src() { return this.src; }

  @Input('src') set _src(value) {
    if (value !== undefined && value === this.src) { return;
  } else {this.src = value ; }
    if (this.src === undefined || this.src === null || this.src.length === 0) {
      this.noMediaText = 'No Media to Show';
    } else {
      this.src = value;
      this.media = this.src[0];
      this.media.imageUrl = this.checkSafeUrl(this.media);
      this.setButtonState();
    }
  }
  @Input('canvasWidth') set _canvasWidth(value) {
      if (value !== undefined && value === this.canvasWidth) { return;
    } else {this.canvasWidth = value ; }
    }
  @Input('canvasHeight') set _canvasHeight(value) {
      if (value !== undefined && value === this.canvasHeight) { return;
    } else {this.canvasHeight = value ; }
    }

  private hovered = false;
  constructor(public sanitizer: DomSanitizer) {
      this.canvasWidth = 800;
      this.canvasHeight = 600;
      this.enablePrevBtn = false;
      this.enableNextBtn = false;
      this.noMediaText = '';
  }
  ngOnInit() { }

  triggerIndexBinding() {
      this.indexChange.emit(this.index);
  }
@HostListener('window:keyup.ArrowRight',  ['$event'])
loadNextDoc(event) {
  if (this.index < this.src.length - 1) {
    this.index++;
    this.setButtonState();
    this.media = this.src[this.index];
    this.media.imageUrl = this.checkSafeUrl(this.media);
    this.triggerIndexBinding();
  }
}

@HostListener('window:keyup.ArrowLeft', ['$event'])
loadPrevDoc(event) {
  if (this.index > 0) {
    this.index--;
    this.setButtonState();
    this.media = this.src[this.index];
    this.media.imageUrl = this.checkSafeUrl(this.media);
    this.triggerIndexBinding();
  }
}

checkSafeUrl(media): SafeUrl {
  if ( media !== null && media.mime === 'text/html') {
    return this.sanitizer.bypassSecurityTrustResourceUrl(media.imageUrl);
  } else {
    return media.imageUrl;
  }
}

setButtonState() {
  if (this.src.length === 0) {
      this.enablePrevBtn = false;
      this.enableNextBtn = false;
  } else {
      if (this.index > 0) {
          this.enablePrevBtn = true;
      } else {
          this.enablePrevBtn = false;
      }
      if (this.index < (this.src.length - 1)) {
          this.enableNextBtn = true;
      } else {
          this.enableNextBtn = false;
      }
  }

}
}
