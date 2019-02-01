import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetComponent } from './planet/planet.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { DonotdeadOpeninsideComponent } from './donotdead-openinside/donotdead-openinside.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    MessageBoxComponent,
    DonotdeadOpeninsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
