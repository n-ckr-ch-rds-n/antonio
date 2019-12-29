import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import {Instrument, Sequence} from 'tone';
import cloneDeep from 'lodash/cloneDeep';
import sample from 'lodash/sample';
import {defaultPatternValues} from '../../default.pattern.values';
import {notesByKey} from '../pattern-generator/notes.by.key';
import {Mood} from '../mood';

@Component({
  selector: 'app-monosynth',
  templateUrl: './monosynth.component.html',
  styleUrls: ['./monosynth.component.scss']
})
export class MonosynthComponent implements OnInit {
  synth: Instrument;
  activeBeats = cloneDeep(defaultPatternValues);
  notes: Array<string | string[]>;
  sequence: Sequence<any>;
  octave = 3;
  key: string;
  mood: Mood;

  constructor() { }

  ngOnInit() {
    this.synth = new Tone.MonoSynth().toMaster();
    this.notes = this.generateNotes();
    this.sequence = this.generateSequence();
    this.sequence.start(0);
  }

  generateNotes() {
    return Object.keys(this.activeBeats).map(beat => {
      const notes = [];
      Object.keys(this.activeBeats[beat]).forEach(sixteenth => {
        if (this.activeBeats[beat][sixteenth]) {
          notes.push(this.generateNote());
        }
      });
      return notes;
    });
  }

  generateNote(): string {
    const possibilities = notesByKey[this.key][this.mood].map(note => `${note}${this.octave}`);
    return sample(possibilities);
  }

  generateSequence() {
    return new Tone.Sequence((time, note) => {
        this.synth.triggerAttackRelease(note, '10hz', time);
      },
      this.notes as ReadonlyArray<string>,
      '4n'
    );
  }

  regenerateSequence() {
    this.sequence.stop(0);
    this.notes = this.generateNotes();
    this.sequence = this.generateSequence();
    this.sequence.start(0);
  }
}
