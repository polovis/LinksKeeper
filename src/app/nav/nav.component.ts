import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {
  category: string;

  @Output() send = new EventEmitter<string>();

  constructor() { }

  getCategory(category: string) {
    this.send.emit(category);
  }
}
