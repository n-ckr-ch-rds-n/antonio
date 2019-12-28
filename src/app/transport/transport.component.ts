import { Component, OnInit } from '@angular/core';
import {TransportService} from '../transport.service';
import * as Tone from 'tone';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit {
  Tone = Tone;
  playing: boolean;

  constructor(private transportService: TransportService) { }

  ngOnInit() {
    this.transportService.transport.loop = true;
    this.transportService.transport.loopEnd = '1m';
  }

  playButtonClick() {
    this.playing = !this.playing;
    if (this.playing) {
      this.transportService.transport.start();
    } else {
      this.transportService.transport.stop();
    }
  }

  tempoChange(event: any) {
    Tone.Transport.bpm.value = event.target.value;
  }
}
