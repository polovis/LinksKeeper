import { Injectable, Input, Output, EventEmitter, ValueProvider } from '@angular/core';
import { Link } from './link';
import { ContainerComponent } from './container/container.component';
import { NavComponent } from './nav/nav.component';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class LinksService {
  
  private links = [
    new Link('http://www.css-tricks.com/snippets/css/a-guide-to-flexbox/', 'flex box', 'Programowanie'),
    new Link ('https://www.w3schools.com/css/css_align.asp', 'align', 'Programowanie'),
    new Link ('https://angular.io/tutorial/toh-pt4', 'Angular: services', 'Programowanie'),
    new Link ('https://github.com/ng-select/ng-select#api', 'Angular: Select Form', 'Programowanie'),
    new Link ('https://www.onet.pl', 'Onet.pl', 'Inne')   
  ]
  private allLinks;
  private lastLinks = new BehaviorSubject<Array<Link>>([]);

  constructor() {
    this.allLinks = new BehaviorSubject<Array<Link>>(this.links);    
    this.allLinks.subscribe((list) => {      
      let last = list.slice(0, 4);
      this.lastLinks.next(last);
    });

  }
  getCategory(cat){
    console.log(`kategoria: ${cat}`)
  }
  getProgramming(category?: string) {
    if (category) {
      return this.links.filter(cat => cat.category === category);
    } else {
      return this.links;
    }
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







