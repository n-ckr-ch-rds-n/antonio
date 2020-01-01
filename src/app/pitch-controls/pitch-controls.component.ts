import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {notesByKey} from '../pattern-generator/notes.by.key';
import {Mood} from '../mood';
import {PitchConfig} from '../pitch.config';

@Component({
  selector: 'app-pitch-controls',
  templateUrl: './pitch-controls.component.html',
  styleUrls: ['./pitch-controls.component.scss']
})
export class PitchControlsComponent implements OnInit {
  Object = Object;
  notesByKey = notesByKey;
  Mood = Mood;

  @Input()
  pitchConfig: PitchConfig;

  @Output()
  octaveChange = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  changeOctave(octave: number) {
    this.pitchConfig.octave = octave;
    this.octaveChange.emit(octave);
  }

}
