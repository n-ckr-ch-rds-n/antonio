import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PitchConfig} from '../sequence/pitch.config';
import {Instrument, Synth} from 'tone';
import {SynthType} from '../synth/synth.type';

@Component({
  selector: 'app-synth-controls',
  templateUrl: './synth-controls.component.html',
  styleUrls: ['./synth-controls.component.scss']
})
export class SynthControlsComponent implements OnInit {
  SynthType = SynthType;

  @Input()
  pitchConfig: PitchConfig;

  @Input()
  synth: Synth;

  @Input()
  synthType: SynthType;

  @Output()
  octaveChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
