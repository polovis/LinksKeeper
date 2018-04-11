import { NgModule } from '@angular/core';
import { MaterialAppModule } from './ngmaterial.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UrlDisplayBoxComponent } from './urlDisplayBox/urlDisplayBox.component';
import { NavComponent } from './nav/nav.component';
import { LinksService } from './links.service';
import { InputUrlFormComponent } from './inputUrlForm/inputUrlForm.component';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    UrlDisplayBoxComponent,
    NavComponent,
    InputUrlFormComponent
  ],
  imports: [
    BrowserModule,
    MaterialAppModule
  ],
  exports: [    
    
  ],
  providers: [LinksService, ContainerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
