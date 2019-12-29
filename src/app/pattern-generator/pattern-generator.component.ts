import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pattern-generator',
  templateUrl: './pattern-generator.component.html',
  styleUrls: ['./pattern-generator.component.scss']
})
export class PatternGeneratorComponent implements OnInit {
  @Input()
  activeBeats: any;

  @Output()
  patternChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  generatePattern(clear?: boolean) {
    Object.keys(this.activeBeats).forEach(beat => {
      Object.keys(this.activeBeats[beat]).forEach(sixteenth => {
        this.activeBeats[beat][sixteenth] = clear ? false : Math.random() > 0.5;
      });
    });
    this.patternChange.emit();
  }

}
