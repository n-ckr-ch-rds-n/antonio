import { Injectable } from '@angular/core';
import * as Tone from 'tone';
import {EffectType} from './effect.type';

@Injectable({
  providedIn: 'root'
})
export class FxService {

  private creator = {
    [EffectType.Delay]: () => new Tone.PingPongDelay('16n', 0.2).toMaster(),
    [EffectType.Distortion]: () => new Tone.Distortion(0.8).toMaster(),
    [EffectType.Reverb]: async () => {
      const reverbNode = new Tone.Reverb(5).toMaster();
      await reverbNode.generate();
      return reverbNode;
    }
  };

  constructor() { }

  async createEffect(effectType: EffectType) {
    console.log(effectType);
    return await this.creator[effectType]();
  }
}
