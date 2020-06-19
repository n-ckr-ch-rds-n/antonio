import {EffectType} from './effect.type';
import {EffectConfig} from './effect.config';
import {DelayParam} from './delay.param';
import {FilterParam} from './filter.param';
import {EffectParam} from './effect.param';
import {DistortionParam} from './distortion.param';
import {ReverbParam} from './reverb.param';

export const effectConfigs: Array<EffectConfig> = [
  {
    type: EffectType.Reverb,
    knobs: [
      {
        min: 1,
        max: 100,
        parameter: ReverbParam.Decay
      }
    ]
  },
  {
    type: EffectType.Delay,
    knobs: Object.values(DelayParam).map(parameter => ({
      min: -100,
      max: 100,
      parameter
    }))
  },
  {
    type: EffectType.Distortion,
    knobs: [
      {
        min: 0,
        max: 100,
        parameter: DistortionParam.Distortion
      }
    ]
  },
  {
    type: EffectType.Filter,
    knobs: [
      {
        min: 0,
        max: 500,
        parameter: FilterParam.Frequency
      }
    ]
  }
];
