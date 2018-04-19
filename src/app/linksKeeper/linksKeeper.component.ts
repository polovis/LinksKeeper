import { Component } from '@angular/core';

@Component({
  selector: 'app-linksKeeper-component',
  templateUrl: './linksKeeper.component.html',
  styleUrls: []
})

export class LinksKeeperComponent {
  category: string;

  constructor() { }

  onSend(category) {
    return this.category = category;
  }
}