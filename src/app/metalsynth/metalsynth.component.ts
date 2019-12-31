import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import {Instrument} from 'tone';
import {SequenceService} from '../sequence.service';
import {GenerateNotesRequest} from '../generate.notes.request';
import {Sequence} from 'tone';
import {Mood} from '../mood';
import {Beatmap} from '../beatmap';
import cloneDeep from 'lodash/cloneDeep';
import {defaultPatternValues} from '../default.pattern.values';

@Component({
  selector: 'app-metalsynth',
  templateUrl: './metalsynth.component.html',
  styleUrls: ['./metalsynth.component.scss']
})
export class MetalsynthComponent implements OnInit {
  synth: Instrument;
  notes: Array<string[]>;
  sequence: Sequence<any>;
  key = 'A';
  mood: Mood = Mood.Major;
  octave = 1;
  activeBeats: Beatmap = cloneDeep(defaultPatternValues);

  constructor(private sequenceService: SequenceService) { }

  ngOnInit() {
    this.synth = new Tone.PolySynth().toMaster();
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

  private toGenerateNotesRequest(): GenerateNotesRequest {
    return {
      key: this.key,
      mood: this.mood,
      octave: this.octave,
      beatmap: this.activeBeats
    };
  }
}
