import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import {TransportService} from '../transport.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor(private transportService: TransportService) { }

  ngOnInit() {
    const player = new Tone.Player('../../assets/SequentialCircuits/clap.wav').toMaster();
    player.autostart = true;
    player.loop = false;
    player.loopStart = 0;
    player.loopEnd = 15;
  }

}
