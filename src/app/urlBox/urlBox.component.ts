import { Component } from '@angular/core';


@Component({
  selector: 'urlBox-component',
  templateUrl: './urlBox.component.html',
  styles: [
    'input{margin-left: 10px; height: 30px}'    
  ]
})
export class UrlBoxComponent {
  links: string[] = ["https://www.euvic.pl"];
  newURL: string;

  addLink(){    
    if(this.newURL !== ''){
      this.links.push(this.newURL);
    }
    this.newURL = '';
  }
}



