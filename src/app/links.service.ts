import { Injectable,  Input, Output, EventEmitter } from '@angular/core';
import { Link } from './link';
import { ContainerComponent } from './container/container.component';

@Injectable()
export class LinksService {  

  private category = ["Programowanie", "Bonsai", "Inne"].sort();
  private lastAddedLink: string[] = [
    "http://www.css-tricks.com/snippets/css/a-guide-to-flexbox/",
    "https://www.w3schools.com/css/css_align.asp", 
    "https://angular.io/tutorial/toh-pt4"
  ];  
  private programming = [
    {
    description: "flex box",
    url: "http://www.css-tricks.com/snippets/css/a-guide-to-flexbox/"    
  },
  {
    description: "align",
    url: "https://www.w3schools.com/css/css_align.asp"    
  },
  {
    description: "Angular: services",
    url: "https://angular.io/tutorial/toh-pt4"    
  }, 
  {
    description: "Angular: Select Form",
    url: "https://github.com/ng-select/ng-select#api"    
  }
  ]  

  getProgramming(){    
    return this.programming;   
  }

  getLastLinks(){
    return this.lastAddedLink;
  }

  getCategory(){
    return this.category;
  }

  addLink(link: Link) {   
    this.programming.push(link);
    this.lastAddedLink.unshift(link.url);
    if(this.lastAddedLink.length > 5){
      this.lastAddedLink.pop();       
    }
  }

}




    
    

