import {BeatDivision} from './beat.division';

export type Beatmap = Record<BeatDivision, Record<BeatDivision, boolean>>;
