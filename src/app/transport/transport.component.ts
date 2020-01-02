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
      ? this.transportService.stopRecording()
      : this.transportService.record();
  }

  tempoChange(event: any) {
    this.transportService.transport.bpm.value = event.target.value;
  }
}
