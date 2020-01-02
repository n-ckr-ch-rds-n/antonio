import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PitchConfig} from '../pitch.config';
import {Instrument} from 'tone';

@Component({
  selector: 'app-synth-controls',
  templateUrl: './synth-controls.component.html',
  styleUrls: ['./synth-controls.component.scss']
})
export class SynthControlsComponent implements OnInit {
  @Input()
  pitchConfig: PitchConfig;

  @Input()
  synth: Instrument;

  @Output()
  octaveChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
