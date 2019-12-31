import {Beatmap} from './beatmap';
import {Mood} from './mood';

export interface GenerateNotesRequest {
  key: string;
  mood: Mood;
  octave: number;
  beatmap: Beatmap;
}
