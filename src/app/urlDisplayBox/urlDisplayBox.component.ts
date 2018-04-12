import { Component, Input, SimpleChanges } from '@angular/core';
import { LinksService } from '../links.service';
import { Link} from '../link';

@Component({
  selector: 'app-urlDisplayBox-component',
  templateUrl: './urlDisplayBox.component.html',
  styleUrls: ["./urlDisplayBox.component.scss"] 
})

export class UrlDisplayBoxComponent {  
 
  links: Array<object>;
  lastFiveLinks: string[]; 
  
  @Input() public programming: Array<object>; 

  constructor(private linksService: LinksService, private lastLinks: LinksService) {
    this.links = linksService.getProgramming();
    this.lastFiveLinks = lastLinks.getLastLinks();
  }
  
 
    
}



