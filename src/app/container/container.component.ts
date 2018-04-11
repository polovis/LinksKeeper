import { Component, Input } from '@angular/core';
import { LinksService } from '../links.service';
import { Link } from '../link';


@Component({
  selector: 'app-container-component',
  templateUrl: './container.component.html',
  styleUrls: []
})

export class ContainerComponent {
  linkToAdd: object;
  programming: Array<object>;


  constructor(private linksService: LinksService) {
  }  

  onSend(newObj: Link) {      
       this.linksService.addLink(newObj);
  }

  

}


