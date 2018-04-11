import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LinksService } from '../links.service';
import { Link} from '../link';

interface NewObject{
  description,
  url
};

@Component({
  selector: 'app-urlDisplayBox-component',
  templateUrl: './urlDisplayBox.component.html',
  styleUrls: ["./urlDisplayBox.component.scss"] 
})

export class UrlDisplayBoxComponent {
  
 
  links: Array<object>;
  lastFiveLinks: string[];
  newURL: string = "";
  descriptionURL: string = "";    
  selectValue: string;
  updateProgramming: Array<object>;

  constructor(private linksService: LinksService, private lastLinks: LinksService) {
    this.links = linksService.getProgramming();
    this.lastFiveLinks = lastLinks.getLastLinks();
  }


  topics: Array<string> = ['Java Script', 'Angular', 'CSS i Sass'];
  
  @Input() public programming: Array<object>;


  ngOnChanges(changes: SimpleChanges): void {
      this.updateProgramming = this.programming;
    }
    
}



