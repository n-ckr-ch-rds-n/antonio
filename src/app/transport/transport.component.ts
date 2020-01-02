import {Component, OnInit} from '@angular/core';
import {TransportService} from '../transport.service';
import * as Tone from 'tone';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit {
  Math = Math;
  playing: boolean;
  recording: boolean;

  constructor(public transportService: TransportService) {
  }

  ngOnInit() {
  }

  playButtonClick(): Tone.Transport {
    this.playing = !this.playing;
    return this.playing
      ? this.transportService.play()
      : this.transportService.stop();
  }

  recordButtonClick() {
  }

  tempoChange(event: any) {
    this.transportService.transport.bpm.value = event.target.value;
  }
}
