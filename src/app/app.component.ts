import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  

  styles: [    
    'button a { color: white; text-decoration: none; }',
    'button { margin-left: 10px; }',
    '.container { border: 1px solid green;}',
    '.first { margin: 0 auto; }'
  ]
})
export class AppComponent {
  title = 'app';
  links: string[] = ["https://www.euvic.pl"];
  newURL: string;

  addLink(){
    console.log(this.newURL)
    this.links.push(this.newURL);
    this.newURL = '';
    console.log(this.newURL)
  }
}
