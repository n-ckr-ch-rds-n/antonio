import {Component, Input, OnInit} from '@angular/core';
import {Instrument, Sequence} from 'tone';
import cloneDeep from 'lodash/cloneDeep';
import {defaultPatternValues} from '../default.pattern.values';
import {Mood} from '../mood';
import {SequenceService} from '../sequence.service';
import {Beatmap} from '../beatmap';
import {GenerateNotesRequest} from '../generate.notes.request';
import {PitchConfig} from '../pitch.config';
import {SynthService} from '../synth.service';
import {SynthType} from '../synth.type';

@Component({
  selector: 'app-monosynth',
  templateUrl: './monosynth.component.html',
  styleUrls: ['./monosynth.component.scss']
})
export class MonosynthComponent implements OnInit {
  pitchConfig: PitchConfig = {
    key: 'A',
    octave: 1,
    mood: Mood.Major
  };

  @Input()
  synthType: SynthType;

  synth: Instrument;
  activeBeats: Beatmap = cloneDeep(defaultPatternValues);
  notes: Array<string[]>;
  sequence: Sequence<any>;

  constructor(private sequenceService: SequenceService,
              private synthService: SynthService) { }

  ngOnInit() {
    this.synth = this.synthService.create(this.synthType);
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
    this.notes = this.notes.map(beat => beat
      .map(note => note.replace(/[0-9]/, `${this.pitchConfig.octave}`)));
    this.sequence.stop(0);
    this.sequence = this.sequenceService.generateSequence(this.synth, this.notes);
    this.sequence.start(0);
  }

  private toGenerateNotesRequest(): GenerateNotesRequest {
    return {
      ...this.pitchConfig,
      beatmap: this.activeBeats
    };
  }
}
