import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LinksService } from '../links.service';
import { Link } from '../link';

@Component({
  selector: 'app-urlDisplayBox-component',
  templateUrl: './urlDisplayBox.component.html',
  styleUrls: ['./urlDisplayBox.component.scss']
})

export class UrlDisplayBoxComponent implements OnChanges {

  links: Array<Link>;
  lastFiveLinks: Array<Link>;

  @Input() public category: string;

  constructor(private linksService: LinksService) {
    linksService.getLatestLinks().subscribe(lastLinks => {
      this.lastFiveLinks = lastLinks;
    });

    linksService.getLinks().subscribe((allLinks) => {
      this.links = allLinks;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.links = this.links.filter((aLink) => {
      return !this.category || aLink.category === this.category;
    })
  }
}