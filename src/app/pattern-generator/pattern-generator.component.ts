import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PatternService} from '../pattern.service';
import {PatternMode} from '../pattern.mode';
import {Synth} from 'tone';

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
    this.patternService.generatePattern(this.activeBeats, mode);
  }

  perform(noteEvent?: {beat: string, sixteenth: string, source: Synth}) {
    this.patternService.patternChange.emit(noteEvent);
  }

}
