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
      this.player.start();
    }, '5n');

  }

}
