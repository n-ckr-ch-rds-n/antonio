import {Component, OnInit} from '@angular/core';
import {TransportService} from './transport.service';
import * as Tone from 'tone';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit {
  Math = Math;
  playing: boolean;
  recording = false;

  constructor(public transportService: TransportService) {
  }

  async ngOnInit() {
  }

  playButtonClick(): Tone.Transport {
    this.playing = !this.playing;
    return this.playing
      ? this.transportService.play()
      : this.transportService.stop();
  }

  async recordButtonClick(): Promise<void> {
    this.recording = !this.recording;
    return this.recording
      ? await this.transportService.record()
      : await this.transportService.stopRecording();
  }

  tempoChange(event: any) {
    this.transportService.transport.bpm.value = event.target.value;
  }
}
