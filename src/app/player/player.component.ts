import {Component, Input, OnInit} from '@angular/core';
import * as Tone from 'tone';
import {TransportService} from '../transport.service';
import {Player} from 'tone';
import {defaultDrumValues} from '../../default.drum.values';
import cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  player: Player;
  delayFX: any;

  @Input()
  sample: string;

  activeBeats = cloneDeep(defaultDrumValues);

  constructor(private transportService: TransportService) { }

  ngOnInit() {
    this.player = new Tone.Player(`../../assets/SequentialCircuits/${this.sample}.mp3`).toMaster();
    this.transportService.transport.scheduleRepeat(() => {
      if (this.beatActive(this.transportService.transport.position)) {
        this.player.start();
      }
    }, '16n');
  }

  beatActive(position: Tone.Encoding.BarsBeatsSixteenths): boolean {
    const values = position.split(':');
    const beat = parseInt(values[1], 10);
    const sixteenth = Math.floor(parseInt(values[2], 10));
    return this.activeBeats[beat][sixteenth];
  }

  connect() {
    this.delayFX = new Tone.PingPongDelay('16n', 0.2).toMaster();
    this.player.connect(this.delayFX);
  }

  disconnect() {
    this.player.disconnect(this.delayFX);
  }

  delay(on: boolean): void {
    on ? this.connect() : this.disconnect();
  }

}
