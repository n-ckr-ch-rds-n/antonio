import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EffectConfig} from '../fx-box/effect.config';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {Distortion, Effect, Filter} from 'tone';
import {EffectParam} from '../fx-box/effect.param';
import {DelayParam} from '../fx-box/delay.param';
import {FilterParam} from '../fx-box/filter.param';
import {DistortionParam} from '../fx-box/distortion.param';
import {ReverbParam} from '../fx-box/reverb.param';

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

  multiplierByParam: Record<EffectParam, number> = {
    [DelayParam.DelayTime]: 0.01,
    [DelayParam.Feedback]: 0.01,
    [FilterParam.Frequency]: 1,
    [DistortionParam.Distortion]: 0.01,
    [ReverbParam.Decay]: 1
  };

  constructor() { }

  ngOnInit() {
  }

  setValue(event: number, param: EffectParam) {
    const newValue = event * this.multiplierByParam[param];
    if (this.valueType(param)) {
      this.effect[param].value = newValue;
    } else {
      this.effect[param] = newValue;
      console.log(this.effect[param]);
    }
  }

  valueType(param: EffectParam): boolean {
    return [DelayParam.DelayTime, DelayParam.Feedback, FilterParam.Frequency].includes(param as any);
  }

}
