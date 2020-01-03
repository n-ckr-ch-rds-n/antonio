import { Injectable } from '@angular/core';
import {Beatmap} from './beatmap';
import {PatternMode} from './pattern.mode';

@Injectable({
  providedIn: 'root'
})
export class PatternService {

  constructor() { }

  generatePattern(activeBeats: Beatmap, mode: PatternMode) {
    Object.keys(activeBeats).forEach(beat => {
      Object.keys(activeBeats[beat]).forEach(sixteenth => {
        activeBeats[beat][sixteenth] = mode === PatternMode.Clear ? false : Math.random() > 0.5;
      });
    });
  }
}
