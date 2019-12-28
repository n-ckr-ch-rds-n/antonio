import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import {TransportService} from '../transport.service';
import {Player} from 'tone';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  player: Player;

  activeBeats = {
    0: {
      0: true,
      1: false,
      2: false,
      3: true
    },
    1: {
      0: false,
      1: true,
      2: true,
      3: false
    },
    2: {
      0: false,
      1: false,
      2: false,
      3: false
    },
    3: {
      0: true,
      1: false,
      2: true,
      3: false
    }
  };

  constructor(private transportService: TransportService) { }

  ngOnInit() {
    this.player = new Tone.Player('../../assets/SequentialCircuits/kick.wav').toMaster();
    this.transportService.transport.scheduleRepeat(() => {
      if (this.beatActive(Tone.Transport.position)) {
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

}
