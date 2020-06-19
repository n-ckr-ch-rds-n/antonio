import {EffectType} from './effect.type';
import {KnobConfig} from './knob.config';

export interface EffectConfig {
  type: EffectType;
  knobs?: KnobConfig[];
}
