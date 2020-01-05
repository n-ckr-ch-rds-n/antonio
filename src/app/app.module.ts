import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {DrumComponent} from './drum/drum.component';
import {TransportComponent} from './transport/transport.component';
import {FormsModule} from '@angular/forms';
import {FxBoxComponent} from './fx-box/fx-box.component';
import {PatternGeneratorComponent} from './pattern-generator/pattern-generator.component';
import {SynthComponent} from './synth/synth.component';
import {TitleComponent} from './title/title.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatDividerModule, MatExpansionModule,
  MatFormFieldModule,
  MatInputModule, MatSelectModule, MatSliderModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {VolumeControlComponent} from './volume-control/volume-control.component';
import {DrumMachineComponent} from './drum-machine/drum-machine.component';
import {PitchControlsComponent} from './pitch-controls/pitch-controls.component';
import {SynthBankComponent} from './synth-bank/synth-bank.component';
import {SynthControlsComponent} from './synth-controls/synth-controls.component';
import {OscillatorComponent} from './oscillator/oscillator.component';
import {EnveloperComponent} from './enveloper/enveloper.component';
import {PannerComponent} from './panner/panner.component';
import {DelayComponent} from './delay/delay.component';
import {InstrumentNameComponent} from './instrument-name/instrument-name.component';
import {KnobModule} from 'ng2-knob';

@NgModule({
  declarations: [
    AppComponent,
    DrumComponent,
    TransportComponent,
    FxBoxComponent,
    PatternGeneratorComponent,
    SynthComponent,
    TitleComponent,
    VolumeControlComponent,
    DrumMachineComponent,
    PitchControlsComponent,
    SynthBankComponent,
    SynthControlsComponent,
    OscillatorComponent,
    EnveloperComponent,
    PannerComponent,
    DelayComponent,
    InstrumentNameComponent
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
    MatExpansionModule,
    MatTooltipModule,
    KnobModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
