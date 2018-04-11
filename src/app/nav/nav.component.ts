import { Component } from '@angular/core';
import { UrlDisplayBoxComponent} from '../urlDisplayBox/urlDisplayBox.component';
import { LinksService } from '../links.service';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav.component.html',
  styles: [    
    `button a { color: white; text-decoration: none; },
     button { margin-left: 10px; }     
     `
  ]
})
export class NavComponent {
  programming;

  constructor(private linksService: LinksService) { }

  ngOnInit(){
    this.programming = this.linksService.getProgramming();
  }
 
  // programming: Array<object> = [
  //   {
  //   description: "flex box",
  //   url: "http://www.css-tricks.com/snippets/css/a-guide-to-flexbox/"    
  // },
  // {
  //   description: "align",
  //   url: "https://www.w3schools.com/css/css_align.asp"    
  // }
  // ] 
  
  
}

