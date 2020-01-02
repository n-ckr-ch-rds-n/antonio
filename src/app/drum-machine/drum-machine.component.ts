import {Component, OnInit} from '@angular/core';
import {Drumkit} from './drumkit';

@Component({
  selector: 'app-drum-machine',
  templateUrl: './drum-machine.component.html',
  styleUrls: ['./drum-machine.component.scss']
})
export class DrumMachineComponent implements OnInit {
  Object = Object;
  Drumkit = Drumkit;
  drumkit: Drumkit = Drumkit.SequentialCircuits;

  samples = {
    [Drumkit.SequentialCircuits]: ['kick', 'clap', 'snare', 'closehat', 'crash', 'openhat', 'tom1', 'tom2']
  };

  constructor() { }

  ngOnInit() {
  }

}
