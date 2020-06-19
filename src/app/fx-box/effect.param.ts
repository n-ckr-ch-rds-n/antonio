import {DelayParam} from './delay.param';
import {FilterParam} from './filter.param';
import {DistortionParam} from './distortion.param';
import {ReverbParam} from './reverb.param';

export type EffectParam = DelayParam | FilterParam | DistortionParam | ReverbParam;
