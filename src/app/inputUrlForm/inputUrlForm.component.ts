import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LinksService } from '../links.service';
import { Link } from '../link';

@Component({
  selector: 'app-inputUrlForm-component',
  templateUrl: './inputUrlForm.component.html',
  styleUrls: ['./inputUrlForm.component.scss']
})

export class InputUrlFormComponent {
  links: string[] = ['https://www.euvic.pl'];
  category: Array<string> = ['Programowanie', 'Inne', 'Bonsai'];
  newURL: string = '';
  descriptionURL: string = '';
  selectValue: string;

  @Output() send = new EventEmitter<Link>();

  submit() {
    let link = new Link(this.newURL, this.descriptionURL, this.selectValue);
    this.send.emit(link);
    this.newURL = '';
    this.descriptionURL = '';
  }
}
