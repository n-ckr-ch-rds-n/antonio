import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drum-machine',
  templateUrl: './drum-machine.component.html',
  styleUrls: ['./drum-machine.component.scss']
})
export class DrumMachineComponent implements OnInit {
  samples = ['kick', 'clap', 'snare', 'closehat', 'crash', 'openhat', 'tom1', 'tom2'];

  constructor() { }

  ngOnInit() {
  }

}
