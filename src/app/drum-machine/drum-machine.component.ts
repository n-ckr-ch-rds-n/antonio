import {Component, Input, OnInit} from '@angular/core';
import * as Tone from 'tone';
import {TransportService} from '../transport.service';
import {Player} from 'tone';
import {defaultPatternValues} from '../../default.pattern.values';
import cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-drum-machine',
  templateUrl: './drum-machine.component.html',
  styleUrls: ['./drum-machine.component.scss']
})
export class DrumMachineComponent implements OnInit {
  player: Player;

  @Input()
  sample: string;

  activeBeats = cloneDeep(defaultPatternValues);

  constructor(private transportService: TransportService) { }

  ngOnInit() {
    this.player = new Tone.Player(`../../assets/SequentialCircuits/${this.sample}.mp3`).toMaster();
    this.transportService.clock.subscribe(beat => {
      if (this.beatActive(beat)) {
        this.player.start();
      }
    });
  }

  beatActive(position: Tone.Encoding.BarsBeatsSixteenths): boolean {
    const values = position.split(':');
    const beat = parseInt(values[1], 10);
    const sixteenth = Math.floor(parseInt(values[2], 10));
    return this.activeBeats[beat][sixteenth];
  }

}
