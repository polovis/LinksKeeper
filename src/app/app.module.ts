import { NgModule } from '@angular/core';
import { MaterialAppModule } from './ngmaterial.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UrlDisplayBoxComponent } from './urlDisplayBox/urlDisplayBox.component';
import { NavComponent } from './nav/nav.component';
import { LinksService } from './links.service';
import { InputUrlFormComponent } from './inputUrlForm/inputUrlForm.component';
import { ContainerComponent } from './container/container.component';
import { LinksKeeperComponent } from './linksKeeper/linksKeeper.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    UrlDisplayBoxComponent,
    NavComponent,
    InputUrlFormComponent,
    LinksKeeperComponent
  ],
  imports: [
    BrowserModule,
    MaterialAppModule
  ],
  exports: [
  ],
  providers: [LinksService, ContainerComponent, NavComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }