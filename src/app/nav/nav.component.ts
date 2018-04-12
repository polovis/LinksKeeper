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
  info: string = "Inne";
  programming;

    
  constructor(private linksService: LinksService) { }

  

  ngOnInit(){
    this.programming = this.linksService.getProgramming();
  }  
}

