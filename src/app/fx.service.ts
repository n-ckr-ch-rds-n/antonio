import { Injectable } from '@angular/core';
import * as Tone from 'tone';

@Injectable({
  providedIn: 'root'
})
export class FxService {

  private creator = {
    delay: () => new Tone.PingPongDelay('16n', 0.2).toMaster(),
    distortion: () => new Tone.Distortion(0.8).toMaster(),
    reverb: async () => {
      const reverbNode = new Tone.Reverb(5).toMaster();
      await reverbNode.generate();
      return reverbNode;
    }
  };

  constructor() { }

  async createEffect(effectName: string) {
    return await this.creator[effectName]();
  }
}
