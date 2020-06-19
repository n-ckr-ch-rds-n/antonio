import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EffectConfig} from '../fx-box/effect.config';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {Effect, Filter} from 'tone';

@Component({
  selector: 'app-effect',
  templateUrl: './effect.component.html',
  styleUrls: ['./effect.component.scss']
})
export class EffectComponent implements OnInit {

  @Input()
  config: EffectConfig;

  @Input()
  effect: Effect | Filter;

  @Output()
  switch = new EventEmitter<MatCheckboxChange>();

  constructor() { }

  ngOnInit() {
  }

}
