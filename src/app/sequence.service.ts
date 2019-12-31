import { Injectable } from '@angular/core';
import {notesByKey} from './pattern-generator/notes.by.key';
import sample from 'lodash/sample';

@Injectable({
  providedIn: 'root'
})
export class SequenceService {

  constructor() { }

  generateNotes(activeBeats: any) {
    return Object.keys(activeBeats).map(beat => {
      const notes = [];
      Object.keys(activeBeats[beat]).forEach(sixteenth => {
        if (activeBeats[beat][sixteenth]) {
          notes.push(this.generateNote());
        }
      });
      return notes;
    });
  }

  generateNote(): string {
    // const possibilities = notesByKey[this.key][this.mood]
    //   .map(note => `${note}${this.octave}`);
    // return sample(possibilities);
    return '';
  }
}
