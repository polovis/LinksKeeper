import { NgModule } from '@angular/core';
import { MaterialAppModule } from './ngmaterial.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UrlBoxComponent } from './urlBox/urlBox.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    UrlBoxComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    MaterialAppModule
  ],
  exports: [    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
