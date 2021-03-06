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
    [SynthType.FMSynth]: () => new Tone.FMSynth().toMaster(),
    [SynthType.MembraneSynth]: () => new Tone.MembraneSynth().toMaster(),
    [SynthType.PluckSynth]: () => new Tone.PluckSynth().toMaster(),
  };

  constructor() {
  }

  create(synth: SynthType): Instrument {
    return this.creator[synth]();
  }

}
