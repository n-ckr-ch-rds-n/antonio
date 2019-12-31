import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {DrumComponent} from './drum/drum.component';
import {TransportComponent} from './transport/transport.component';
import {FormsModule} from '@angular/forms';
import {FxBoxComponent} from './fx-box/fx-box.component';
import {PatternGeneratorComponent} from './pattern-generator/pattern-generator.component';
import {MonosynthComponent} from './monosynth/monosynth.component';
import { TitleComponent } from './title/title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatDividerModule, MatExpansionModule,
  MatFormFieldModule,
  MatInputModule, MatSelectModule, MatSliderModule,
  MatToolbarModule
} from '@angular/material';
import { VolumeControlComponent } from './volume-control/volume-control.component';
import { DrumMachineComponent } from './drum-machine/drum-machine.component';

@NgModule({
  declarations: [
    AppComponent,
    DrumComponent,
    TransportComponent,
    FxBoxComponent,
    PatternGeneratorComponent,
    MonosynthComponent,
    TitleComponent,
    VolumeControlComponent,
    DrumMachineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatCardModule,
    MatSliderModule,
    MatSelectModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
