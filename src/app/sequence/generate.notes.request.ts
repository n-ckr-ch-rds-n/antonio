import {Beatmap} from './beatmap';
import {PitchConfig} from './pitch.config';
import {SequenceMode} from './sequence.mode';

export interface GenerateNotesRequest extends PitchConfig {
  beatmap: Beatmap;
  mode: SequenceMode;
}
