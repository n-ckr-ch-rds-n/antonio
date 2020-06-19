import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EffectConfig} from '../fx-box/effect.config';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {Effect, Filter} from 'tone';
import {EffectParam} from '../fx-box/effect.param';
import {DelayParam} from '../fx-box/delay.param';
import {FilterParam} from '../fx-box/filter.param';

@Component({
  selector: 'app-effect',
  templateUrl: './effect.component.html',
  styleUrls: ['./effect.component.scss']
})
export class EffectComponent implements OnInit {

  multiplierByParam: Record<EffectParam, number> = {
    [DelayParam.DelayTime]: 0.01,
    [DelayParam.Feedback]: 0.01,
    [FilterParam.Frequency]: 1
  };

  @Input()
  config: EffectConfig;

  @Input()
  effect: Effect | Filter;

  @Output()
  switch = new EventEmitter<MatCheckboxChange>();

  constructor() { }

  ngOnInit() {
  }

  setValue(event: number, param: EffectParam) {
    this.effect[param].value = event * this.multiplierByParam[param];
  }

}
