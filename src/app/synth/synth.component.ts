import {Component, Input, OnInit} from '@angular/core';
import {Instrument, Sequence, Synth} from 'tone';
import cloneDeep from 'lodash/cloneDeep';
import {defaultPatternValues} from '../default.pattern.values';
import {Mood} from '../mood';
import {SequenceService} from '../sequence.service';
import {Beatmap} from '../beatmap';
import {GenerateNotesRequest} from '../generate.notes.request';
import {PitchConfig} from '../pitch.config';
import {SynthService} from '../synth.service';
import {SynthType} from '../synth.type';
import {SequenceMode} from '../sequence.mode';
import {PatternService} from '../pattern.service';
import {NoteEvent} from '../pattern-generator/note.event';

@Component({
  selector: 'app-monosynth',
  templateUrl: './synth.component.html',
  styleUrls: ['./synth.component.scss']
})
export class SynthComponent implements OnInit {
  pitchConfig: PitchConfig = {
    key: 'A',
    octave: 1,
    mood: Mood.Major
  };
  synth: Instrument;
  activeBeats: Beatmap = cloneDeep(defaultPatternValues);
  notes: Array<string[]>;
  sequence: Sequence<any>;
  notesRequest: GenerateNotesRequest = {
    ...this.pitchConfig,
    mode: SequenceMode.Synth,
    beatmap: this.activeBeats
  };

  @Input()
  synthType: SynthType;



  constructor(private sequenceService: SequenceService,
              private synthService: SynthService,
              private patternService: PatternService) { }

  ngOnInit() {
    this.synth = this.synthService.create(this.synthType);
    this.notes = this.sequenceService.generateNotes(this.notesRequest);
    this.sequence = this.sequenceService.generateSequence(this.synth, this.notes);
    this.sequence.start(0);
    this.patternService.patternChange.subscribe((noteEvent) => {
      if (noteEvent.source === this.synth) {
        this.regenerateSequence(noteEvent);
      }
    });
  }

  regenerateSequence(noteEvent: NoteEvent) {
    this.sequence.stop(0);
    this.notes = noteEvent.beat
      ? this.sequenceService.addOrRemoveNote({...noteEvent, currentNotes: this.notes}, this.notesRequest)
      : this.sequenceService.generateNotes(this.notesRequest);
    this.sequence = this.sequenceService.generateSequence(this.synth, this.notes);
    this.sequence.start(0);
  }

  octaveChange(octave: number) {
    this.notes = this.notes.map(beat => beat
      .map(note => !!note ? note.replace(/[0-9]/, `${this.pitchConfig.octave}`) : note));
    this.sequence.stop(0);
    this.sequence = this.sequenceService.generateSequence(this.synth, this.notes);
    this.sequence.start(0);
  }

}
