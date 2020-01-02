import {Component, Input, OnInit} from '@angular/core';
import {BasicOscillatorType, OmniOscillator} from 'tone';

@Component({
  selector: 'app-oscillator',
  templateUrl: './oscillator.component.html',
  styleUrls: ['./oscillator.component.scss']
})
export class OscillatorComponent implements OnInit {
  oscillatorTypes: BasicOscillatorType[] = ['sine', 'square', 'sawtooth', 'triangle'];

  @Input()
  oscillator: OmniOscillator;

  constructor() { }

  ngOnInit() {
  }

}
