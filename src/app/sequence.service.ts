import { Injectable } from '@angular/core';
import {notesByKey} from './pattern-generator/notes.by.key';
import sample from 'lodash/sample';
import {Beatmap} from './beatmap';
import {GenerateNotesRequest} from './generate.notes.request';

@Injectable({
  providedIn: 'root'
})
export class SequenceService {

  constructor() { }

  generateNotes(request: GenerateNotesRequest) {
    return Object.keys(request.beatmap).map(beat => {
      const notes = [];
      Object.keys(request.beatmap[beat]).forEach(sixteenth => {
        if (request.beatmap[beat][sixteenth]) {
          notes.push(this.generateNote(request));
        }
      });
      return notes;
    });
  }

  generateNote(request: GenerateNotesRequest): string {
    const possibilities = notesByKey[request.key][request.mood]
      .map(note => `${note}${request.octave}`);
    return sample(possibilities);
  }
}
