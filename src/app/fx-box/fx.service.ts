import { Injectable } from '@angular/core';
import * as Tone from 'tone';
import {EffectType} from './effect.type';
import {Effect, Filter} from 'tone';
import {FilterType} from '../filter/filter.type';

@Injectable({
  providedIn: 'root'
})
export class FxService {

  private creator: Record<EffectType, () => Effect | Promise<Effect> | Filter> = {
    [EffectType.Delay]: () => new Tone.PingPongDelay('16n', 0.2).toMaster(),
    [EffectType.Distortion]: () => new Tone.Distortion(0.8).toMaster(),
    [EffectType.Reverb]: async () => {
      const reverbNode = new Tone.Reverb(5).toMaster();
      await reverbNode.generate();
      return reverbNode;
    },
    [EffectType.Filter]: () => new Tone.Filter(200, FilterType.Highpass)
  };

  constructor() { }

  async createEffect(effectType: EffectType) {
    return this.creator[effectType]();
  }
}
