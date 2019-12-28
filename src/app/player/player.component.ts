import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const player = new Tone.Player('../../assets/SequentialCircuits/clap.wav').toMaster();
    player.autostart = true;
  }

}
