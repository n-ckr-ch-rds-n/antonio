import { Component, OnInit } from '@angular/core';
import {SynthType} from '../synth/synth.type';

@Component({
  selector: 'app-synth-bank',
  templateUrl: './synth-bank.component.html',
  styleUrls: ['./synth-bank.component.scss']
})
export class SynthBankComponent implements OnInit {
  Object = Object;
  SynthType = SynthType;

  constructor() { }

  ngOnInit() {
  }

}
