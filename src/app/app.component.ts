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
    this.paths = [{url: 'https://hallysonh.github.io/ngx-imageviewer/pdf-test.pdf',
    mimetype: 'application/pdf'},
    {url: 'https://i.ytimg.com/vi/nlYlNF30bVg/hqdefault.jpg',
    mimetype: 'image/png'},
    {url: 'https://www.askideas.com/media/10/Funny-Goat-Closeup-Pouting-Face.jpg',
    mimetype: 'image/jpeg'},
    {url: 'https://en.wikipedia.org/wiki/Earth',
    mimetype: 'text/html'}
  ];

  }

}
