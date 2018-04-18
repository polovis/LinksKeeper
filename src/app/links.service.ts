import { Injectable, Input, Output, EventEmitter, ValueProvider } from '@angular/core';
import { Link } from './link';
import { ContainerComponent } from './container/container.component';
import { NavComponent } from './nav/nav.component';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';

@Injectable()
export class LinksService {

  categoryFromNav: string;
  private lastAddedLink: string[] = [
    'http://www.css-tricks.com/snippets/css/a-guide-to-flexbox/',
    'https://www.w3schools.com/css/css_align.asp',
    'https://angular.io/tutorial/toh-pt4'
  ];
  private links = [
    {
      description: 'flex box',
      url: 'http://www.css-tricks.com/snippets/css/a-guide-to-flexbox/',
      category: 'Programowanie'
    },
    {
      description: 'align',
      url: 'https://www.w3schools.com/css/css_align.asp',
      category: 'Programowanie'
    },
    {
      description: 'Angular: services',
      url: 'https://angular.io/tutorial/toh-pt4',
      category: 'Programowanie'
    },
    {
      description: 'Angular: Select Form',
      url: 'https://github.com/ng-select/ng-select#api',
      category: 'Programowanie'
    },
    {
      description: 'Onet.pl',
      url: 'https://www.onet.pl',
      category: 'Inne'
    }
  ]
  private allLinks = new Subject<Array<Link>>();
  private lastLinks = new Subject<Array<Link>>();

  constructor() {
    this.allLinks.subscribe((list) => {
      let last = list.slice(0, 4);
      this.lastLinks.next(last);
    });
    this.allLinks.next(this.links);
  }

  getLastLinks() {
    return this.lastAddedLink;
  }

  addLink(link: Link) {
    this.links.splice(0, 0, link);
    this.allLinks.next(this.links);
  }

  getLinks(): Observable<Array<Link>> {
    return this.allLinks.asObservable();
  }

  getLatestLinks(): Observable<Array<Link>> {
    return this.lastLinks.asObservable();
  }
}







