import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import {Instrument} from 'tone';
import {TransportService} from '../transport.service';

@Component({
  selector: 'app-monosynth',
  templateUrl: './monosynth.component.html',
  styleUrls: ['./monosynth.component.scss']
})
export class MonosynthComponent implements OnInit {
  synth: Instrument;

  constructor(private transportService: TransportService) { }

  ngOnInit() {
    this.synth = new Tone.MonoSynth().toMaster();
    const notes = ['C3', 'Eb3', 'G3', 'Bb3'];
    const synthPart = new Tone.Sequence((time, note) => {
        this.synth.triggerAttackRelease(note, '10hz', time);
      },
      notes as ReadonlyArray<string>,
      '4n'
    );
    synthPart.start(0);
  }

}
