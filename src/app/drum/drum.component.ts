import {Component, Input, OnInit} from '@angular/core';
import * as Tone from 'tone';
import {TransportService} from '../transport.service';
import {Player} from 'tone';
import {defaultPatternValues} from '../../default.pattern.values';
import cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-drum',
  templateUrl: './drum.component.html',
  styleUrls: ['./drum.component.scss']
})
export class DrumComponent implements OnInit {
  player: Player;

  @Input()
  sample: string;

  activeBeats = cloneDeep(defaultPatternValues);

  constructor(private transportService: TransportService) { }

  ngOnInit() {
    this.player = new Tone.Player(`../../assets/SequentialCircuits/${this.sample}.mp3`).toMaster();
    const notes = [['C1', 'C2'], ['C1'], ['C1'], ['C1']];
    const sequence = new Tone.Sequence((time, note) => {
        sampler.triggerAttack(note);
      },
      notes as ReadonlyArray<string>,
      '4n'
    );
    const sampler = new Tone.Sampler({
      C1 : `../../assets/SequentialCircuits/${this.sample}.mp3`,
    }, () => {
      sequence.start(0);
    }).toMaster();

    // sequence.start(0);
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

}
