import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {DrumMachineComponent} from './drum-machine/drum-machine.component';
import {TransportComponent} from './transport/transport.component';
import {FormsModule} from '@angular/forms';
import { FxBoxComponent } from './fx-box/fx-box.component';

@NgModule({
  declarations: [
    AppComponent,
    DrumMachineComponent,
    TransportComponent,
    FxBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
