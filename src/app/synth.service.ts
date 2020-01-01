import {Injectable} from '@angular/core';
import {Instrument} from 'tone';
import {SynthType} from './synth.type';
import * as Tone from 'tone';

@Injectable({
  providedIn: 'root'
})
export class SynthService {

  private creator: Record<string, () => Instrument> = {
    [SynthType.Monosynth]: () => new Tone.MonoSynth().toMaster(),
    [SynthType.Polysynth]: () => new Tone.PolySynth().toMaster()
  };

  constructor() {
  }

  create(synth: SynthType) {
    return this.creator[synth]();
  }

}
