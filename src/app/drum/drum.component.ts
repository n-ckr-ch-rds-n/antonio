import {Component, Input, OnInit} from '@angular/core';
import * as Tone from 'tone';
import {Player, Sampler, Sequence} from 'tone';
import {defaultPatternValues} from '../default.pattern.values';
import cloneDeep from 'lodash/cloneDeep';
import {SequenceService} from '../sequence.service';
import {SequenceMode} from '../sequence.mode';
import {GenerateNotesRequest} from '../generate.notes.request';
import {MatCheckboxChange} from '@angular/material';
import {Drumkit} from '../drum-machine/drumkit';

@Component({
  selector: 'app-drum',
  templateUrl: './drum.component.html',
  styleUrls: ['./drum.component.scss']
})
export class DrumComponent implements OnInit {
  sampler: Sampler;
  sequence: Sequence<any>;
  notes: any;
  octave = 1;
  reversed = false;
  activeBeats = cloneDeep(defaultPatternValues);
  notesRequest: GenerateNotesRequest = {
    octave: this.octave,
    mode: SequenceMode.Drum,
    beatmap: this.activeBeats
  };

  @Input()
  sample: string;

  @Input()
  drumkit: Drumkit;


  constructor(private sequenceService: SequenceService) { }

  ngOnInit() {
    this.sampler = this.initialiseSampler();
    this.notes = this.sequenceService.generateNotes(this.notesRequest);
    this.sequence = this.sequenceService.generateSequence(this.sampler, this.notes);
  }

  reverseSample(event: MatCheckboxChange) {
    const buffer = (this.sampler as any)._buffers._buffers[24];
    buffer.reverse = event.checked;
    this.reversed = event.checked;
  }

  regenerateSequence() {
    this.sequence.stop(0);
    this.notes = this.sequenceService.generateNotes(this.notesRequest);
    this.sequence = this.sequenceService.generateSequence(this.sampler, this.notes);
    this.sequence.start(0);
  }

  initialiseSampler(): Sampler {
    return new Tone.Sampler({
      C1 : `../../assets/${this.drumkit}/${this.sample}.mp3`,
    }, () => {
      this.sequence.start(0);
    }).toMaster();
  }

}
