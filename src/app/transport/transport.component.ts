import { Component, OnInit } from '@angular/core';
import {TransportService} from '../transport.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit {
  playing: boolean;

  constructor(public transportService: TransportService) { }

  ngOnInit() {
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
    this.transportService.transport.bpm.value = event.target.value;
  }
}
