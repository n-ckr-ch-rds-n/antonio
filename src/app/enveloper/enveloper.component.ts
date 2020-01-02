import {Component, Input, OnInit} from '@angular/core';
import {Envelope} from 'tone';

@Component({
  selector: 'app-enveloper',
  templateUrl: './enveloper.component.html',
  styleUrls: ['./enveloper.component.scss']
})
export class EnveloperComponent implements OnInit {
  envelopeFields: Array<keyof Envelope> = ['attack', 'decay', 'sustain', 'release'];

  @Input()
  envelope: Envelope;

  constructor() { }

  ngOnInit() {
  }

}
