import {Beatmap} from './beatmap';
import {PitchConfig} from './pitch.config';

export interface GenerateNotesRequest extends PitchConfig {
  beatmap: Beatmap;
}
