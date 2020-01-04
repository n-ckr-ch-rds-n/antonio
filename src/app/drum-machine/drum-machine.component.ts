import {Component, EventEmitter, OnInit} from '@angular/core';
import {Drumkit} from './drumkit';
import {DrumkitService} from '../drumkit.service';

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
    [Drumkit.SequentialCircuits]: ['kick', 'clap', 'snare', 'closehat', 'crash', 'openhat', 'tom1', 'tom2'],
    [Drumkit.Simmons]: ['kick1', 'kick2', 'snare1', 'snare2', 'snare3', 'snare4', 'snare5', 'snare6', 'snare7',
      'snare8', 'tom1', 'tom2', 'tom3']
  };

  constructor(private drumkitService: DrumkitService) { }

  ngOnInit() {
  }

  changeDrumkit(drumkit: Drumkit) {
    this.drumkitService.drumkitChange.emit();
    this.drumkit = drumkit;
  }

}
