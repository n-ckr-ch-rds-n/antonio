import {Injectable} from '@angular/core';
import sample from 'lodash/sample';
import {GenerateNotesRequest} from './generate.notes.request';
import * as Tone from 'tone';
import {Instrument, Sampler, Sequence, Synth} from 'tone';
import {SequenceMode} from './sequence.mode';
import {notesByKey} from './pattern-generator/notes.by.key';
import {NoteEvent} from './pattern-generator/note.event';

@Injectable({
  providedIn: 'root'
})
export class SequenceService {

  constructor() { }

  addOrRemoveNote(noteEvent: NoteEvent & {currentNotes: Array<any>}, request: GenerateNotesRequest) {
    const beat = parseInt(noteEvent.beat, 10);
    const sixteenth = parseInt(noteEvent.sixteenth, 10);
    noteEvent.currentNotes[beat][sixteenth] = noteEvent.currentNotes[beat][sixteenth] === null
      ? this.generateNote(request)
      : null;
    return noteEvent.currentNotes;
  }

  generateNotes(request: GenerateNotesRequest) {
    return Object.keys(request.beatmap).map(beat => {
      const notes = [];
      Object.keys(request.beatmap[beat]).forEach(sixteenth => {
        if (request.beatmap[beat][sixteenth]) {
          notes.push(this.generateNote(request));
        } else {
          notes.push(null);
        }
      });
      return notes;
    });
  }

  generateNote(request: GenerateNotesRequest): string {
    const possibilities = request.mode === SequenceMode.Synth
      ? notesByKey[request.key][request.mood].map(note => `${note}${request.octave}`)
      : [`C${request.octave}`];
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
