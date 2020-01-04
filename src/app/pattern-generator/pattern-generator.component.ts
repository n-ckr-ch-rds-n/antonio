import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PatternService} from '../pattern.service';
import {PatternMode} from '../pattern.mode';
import {Synth} from 'tone';
import {NoteEvent} from './note.event';

@Component({
  selector: 'app-pattern-generator',
  templateUrl: './pattern-generator.component.html',
  styleUrls: ['./pattern-generator.component.scss']
})
export class PatternGeneratorComponent implements OnInit {
  PatternMode = PatternMode;

  @Input()
  activeBeats: any;

  @Input()
  source: Synth;

  constructor(private patternService: PatternService) { }

  ngOnInit() {
  }

  generatePattern(mode?: PatternMode) {
    this.patternService.generatePattern(this.activeBeats, mode, this.source);
  }

  perform(noteEvent: NoteEvent) {
    this.patternService.patternChange.emit(noteEvent);
  }

}
