import {BeatDivision} from '../sequence/beat.division';
import {Instrument} from 'tone';

export interface NoteEvent {
  beat?: BeatDivision;
  sixteenth?: BeatDivision;
  source?: Instrument;
}
