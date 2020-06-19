import {EffectType} from './effect.type';
import {EffectConfig} from './effect.config';

export const effectConfigs: Array<EffectConfig> = [
  {
    type: EffectType.Reverb
  },
  {
    type: EffectType.Delay
  },
  {
    type: EffectType.Distortion
  },
  {
    type: EffectType.Filter,
    knobs: [
      {
        min: 0,
        max: 500,
        parameter: 'frequency'
      }
    ]
  }
];
