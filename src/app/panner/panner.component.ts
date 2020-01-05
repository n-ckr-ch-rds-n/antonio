import {Component, Input, OnInit} from '@angular/core';
import {Instrument, Panner, Player} from 'tone';
import * as Tone from 'tone';

@Component({
  selector: 'app-panner',
  templateUrl: './panner.component.html',
  styleUrls: ['./panner.component.scss']
})
export class PannerComponent implements OnInit {
  @Input()
  source: Player | Instrument;

  panner: Panner;

  constructor() { }

  ngOnInit() {
    this.panner = new Tone.Panner(0.5).toMaster();
    this.source.connect(this.panner);
  }

  panChange(event: number) {
    this.panner.pan.value = event * 0.01;
  }

}
