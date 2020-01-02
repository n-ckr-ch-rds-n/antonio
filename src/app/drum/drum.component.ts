import {Component, Input, OnInit} from '@angular/core';
import * as Tone from 'tone';
import {Player, Sampler, Sequence} from 'tone';
import {TransportService} from '../transport.service';
import {defaultPatternValues} from '../default.pattern.values';
import cloneDeep from 'lodash/cloneDeep';
import {SequenceService} from '../sequence.service';
import {SequenceMode} from '../sequence.mode';

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

  @Input()
  sample: string;

  activeBeats = cloneDeep(defaultPatternValues);

  constructor(private transportService: TransportService,
              private sequenceService: SequenceService) { }

  ngOnInit() {
    // this.player = new Tone.Player(`../../assets/SequentialCircuits/${this.sample}.mp3`).toMaster();
    this.sampler = this.initialiseSampler();
    this.notes = this.sequenceService.generateNotes({
      octave: this.octave,
      beatmap: this.activeBeats,
      mode: SequenceMode.Drum
    });
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

  initialiseSampler(): Sampler {
    return new Tone.Sampler({
      C1 : `../../assets/SequentialCircuits/${this.sample}.mp3`,
    }, () => {
      this.sequence.start(0);
    }).toMaster();
  }

}
