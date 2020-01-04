import {Mood} from '../sequence/mood';

export const notesByKey = {
  A: {
    [Mood.Major]: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
    [Mood.Minor]: ['A', 'B', 'C', 'D', 'E', 'F', 'G#']
  },
  B: {
    [Mood.Major]: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
    [Mood.Minor]: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A#']
  },
  C: {
    [Mood.Major]: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    [Mood.Minor]: ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'B']
  },
  D: {
    [Mood.Major]: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
    [Mood.Minor]: ['D', 'E', 'F', 'G', 'A', 'Bb', 'C#']
  },
  E: {
    [Mood.Major]: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
    [Mood.Minor]: ['E', 'F#', 'G', 'A', 'B', 'C', 'D#']
  },
  F: {
    [Mood.Major]: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
    [Mood.Minor]: ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'E']
  },
  G: {
    [Mood.Major]: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
    [Mood.Minor]: ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F#']
  },
};
