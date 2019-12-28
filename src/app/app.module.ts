import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { TransportComponent } from './transport/transport.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TransportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
