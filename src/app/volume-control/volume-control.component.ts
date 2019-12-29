import {Component, Input, OnInit} from '@angular/core';
import {Instrument, Player} from 'tone';

@Component({
  selector: 'app-volume-control',
  templateUrl: './volume-control.component.html',
  styleUrls: ['./volume-control.component.scss']
})
export class VolumeControlComponent implements OnInit {
  @Input()
  source: Player | Instrument;

  constructor() { }

  ngOnInit() {
  }

}
