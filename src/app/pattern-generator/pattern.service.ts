import {EventEmitter, Injectable, Output} from '@angular/core';
import {Beatmap} from '../sequence/beatmap';
import {PatternMode} from '../sequence/pattern.mode';
import {Instrument} from 'tone';
import {NoteEvent} from './note.event';

@Injectable({
  providedIn: 'root'
})
export class PatternService {
  @Output()
  patternChange = new EventEmitter<NoteEvent>();

  constructor() { }

  generatePattern(activeBeats: Beatmap, mode: PatternMode, source?: Instrument) {
    Object.keys(activeBeats).forEach(beat => {
      Object.keys(activeBeats[beat]).forEach(sixteenth => {
        activeBeats[beat][sixteenth] = mode === PatternMode.Clear ? false : Math.random() > 0.5;
      });
    });
    this.patternChange.emit({source});
  }
}
