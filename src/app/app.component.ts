import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `

  <div class="button-row">      
      <button mat-flat-button *ngFor="let link of links"><a mat-list-item href="#">{{link}} btn</a></button>
  </div>

  
  <mat-nav-list>
    <mat-list-item *ngFor="let link of links">
      <a matLine href="#">{{ link }} link</a>
    </mat-list-item>
  </mat-nav-list>

  `,
  styles: [
    'button a { color: white; text-decoration: none;}',
    'button { margin-left: 10px;}'
  ]
})
export class AppComponent {
  title = 'app';
  links = ['pierwszy', 'drugi', 'trzeci', 'czwarty', 'piąty'];
}
