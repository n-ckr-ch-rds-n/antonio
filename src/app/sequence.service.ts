import { Injectable } from '@angular/core';
import {notesByKey} from './pattern-generator/notes.by.key';
import sample from 'lodash/sample';
import {Beatmap} from './beatmap';
import {GenerateNotesRequest} from './generate.notes.request';
import * as Tone from 'tone';
import {Instrument, Player, Sampler, Sequence} from 'tone';

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

  generateSequence(source: Sampler | Instrument, notes: Array<string[]>): Sequence<any> {
    return new Tone.Sequence((time, note) => {
        source.triggerAttackRelease(note, '10hz', time);
      },
      notes as any as ReadonlyArray<string>,
      '4n'
    );
  }
}
