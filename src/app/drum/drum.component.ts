import {Component, Input, OnInit} from '@angular/core';
import * as Tone from 'tone';
import {Player, Sampler, Sequence} from 'tone';
import {TransportService} from '../transport.service';
import {defaultPatternValues} from '../default.pattern.values';
import cloneDeep from 'lodash/cloneDeep';
import {SequenceService} from '../sequence.service';
import {SequenceMode} from '../sequence.mode';
import {GenerateNotesRequest} from '../generate.notes.request';

@Component({
  selector: 'app-drum',
  templateUrl: './drum.component.html',
  styleUrls: ['./drum.component.scss']
})
export class DrumComponent implements OnInit {
  player: Player;
  sampler: Sampler;
  sequence: Sequence;
  notes: any;
  octave = 1;
  activeBeats = cloneDeep(defaultPatternValues);
  notesRequest: GenerateNotesRequest = {
    octave: this.octave,
    mode: SequenceMode.Drum,
    beatmap: this.activeBeats
  };

  @Input()
  sample: string;


  constructor(private transportService: TransportService,
              private sequenceService: SequenceService) { }

  ngOnInit() {
    // this.player = new Tone.Player(`../../assets/SequentialCircuits/${this.sample}.mp3`).toMaster();
    this.sampler = this.initialiseSampler();
    this.notes = this.sequenceService.generateNotes(this.notesRequest);
    this.sequence = this.sequenceService.generateSequence(this.sampler, this.notes);
    // this.sequence = new Tone.Sequence((time, note) => {
    //     this.sampler.triggerAttack(note);
    //   },
    //   this.notes as ReadonlyArray<string>,
    //   '4n'
    // );
    // const buffer = sampler._buffers._buffers[24];
    // buffer.reverse = true;
    // console.log(buffer.reverse);
    // this.transportService.clock.subscribe(beat => {
    //   if (this.beatActive(beat)) {
    //     this.player.start();
    //   }
    // });
  }

  beatActive(position: Tone.Encoding.BarsBeatsSixteenths): boolean {
    const values = position.split(':');
    const beat = parseInt(values[1], 10);
    const sixteenth = Math.floor(parseInt(values[2], 10));
    return this.activeBeats[beat][sixteenth];
  }

  regenerateSequence() {
    this.sequence.stop(0);
    this.notes = this.sequenceService.generateNotes(this.notesRequest);
    console.log(this.notes);
    this.sequence = this.sequenceService.generateSequence(this.sampler, this.notes);
    this.sequence.start(0);
  }

  initialiseSampler(): Sampler {
    return new Tone.Sampler({
      C1 : `../../assets/SequentialCircuits/${this.sample}.mp3`,
    }, () => {
      this.sequence.start(0);
    }).toMaster();
  }

}
