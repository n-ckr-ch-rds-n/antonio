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

  constructor(private transportService: TransportService) { }

  ngOnInit() {
    this.player = new Tone.Player('../../assets/SequentialCircuits/clap.wav').toMaster();
    this.transportService.transport.scheduleRepeat(() => {
      if (this.beatActive(Tone.Transport.position)) {
        this.player.start();
      }
    }, '16n');
  }

  beatActive(position: Tone.Encoding.BarsBeatsSixteenths): boolean {
    const values = position.split(':');
    const sixteenth = Math.floor(parseInt(values[2], 10));
    console.log(sixteenth);
    return parseInt(values[1], 10) === 1 && sixteenth === 2;
  }

}
