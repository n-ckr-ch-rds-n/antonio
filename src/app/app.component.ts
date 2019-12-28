import {Component, OnInit} from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'antonio';
  samples = ['clap', 'closehat', 'crash', 'kick', 'openhat', 'snare', 'tom1', 'tom2'];

  async ngOnInit() {
    await (Tone.context as any as AudioContext).resume();
  }
}
