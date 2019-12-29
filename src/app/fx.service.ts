import { Injectable } from '@angular/core';
import * as Tone from 'tone';

@Injectable({
  providedIn: 'root'
})
export class FxService {

  creator = {
    delay: () => new Tone.PingPongDelay('16n', 0.2).toMaster(),
    distortion: () => new Tone.Distortion(0.8).toMaster()
  };

  constructor() { }

  createEffect(effectName: string) {
    return this.creator[effectName]();
  }
}
