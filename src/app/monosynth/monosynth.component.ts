import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import {Instrument, Sequence} from 'tone';
import cloneDeep from 'lodash/cloneDeep';
import {defaultPatternValues} from '../default.pattern.values';
import {notesByKey} from '../pattern-generator/notes.by.key';
import {Mood} from '../mood';
import {SequenceService} from '../sequence.service';
import {Beatmap} from '../beatmap';
import {GenerateNotesRequest} from '../generate.notes.request';

@Component({
  selector: 'app-monosynth',
  templateUrl: './monosynth.component.html',
  styleUrls: ['./monosynth.component.scss']
})
export class MonosynthComponent implements OnInit {
  Object = Object;
  notesByKey = notesByKey;
  Mood = Mood;
  synth: Instrument;
  activeBeats: Beatmap = cloneDeep(defaultPatternValues);
  notes: Array<string[]>;
  sequence: Sequence<any>;
  octave = 1;
  key = 'A';
  mood: Mood = Mood.Major;

  constructor(private sequenceService: SequenceService) { }

  ngOnInit() {
    this.synth = new Tone.MonoSynth().toMaster();
    this.notes = this.sequenceService.generateNotes(this.toGenerateNotesRequest());
    this.sequence = this.sequenceService.generateSequence(this.synth, this.notes);
    this.sequence.start(0);
  }

  regenerateSequence() {
    this.sequence.stop(0);
    this.notes = this.sequenceService.generateNotes(this.toGenerateNotesRequest());
    this.sequence = this.sequenceService.generateSequence(this.synth, this.notes);
    this.sequence.start(0);
  }

  octaveChange(octave: number) {
    this.octave = octave;
    this.notes = this.notes.map(beat => beat
      .map(note => note.replace(/[0-9]/, `${this.octave}`)));
    this.sequence.stop(0);
    this.sequence = this.sequenceService.generateSequence(this.synth, this.notes);
    this.sequence.start(0);
  }

  private toGenerateNotesRequest(): GenerateNotesRequest {
    return {
      key: this.key,
      mood: this.mood,
      octave: this.octave,
      beatmap: this.activeBeats
    };
  }
}
