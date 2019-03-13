import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Document Viewer';
  paths: any[];
  width: number;
  height: number;

  constructor() {
    this.paths = [{imageUrl: 'https://hallysonh.github.io/ngx-imageviewer/pdf-test.pdf',
    mime: 'application/pdf'},
    {imageUrl: 'https://i.ytimg.com/vi/nlYlNF30bVg/hqdefault.jpg',
    mime: 'image/jgeg'},
    {imageUrl: 'https://www.askideas.com/media/10/Funny-Goat-Closeup-Pouting-Face.jpg',
    mime: 'image/jgeg'},
    {imageUrl: 'https://en.wikipedia.org/wiki/Earth',
    mime: 'text/html'}
  ];

  }

}
