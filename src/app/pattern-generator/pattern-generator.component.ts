import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pattern-generator',
  templateUrl: './pattern-generator.component.html',
  styleUrls: ['./pattern-generator.component.scss']
})
export class PatternGeneratorComponent implements OnInit {
  @Input()
  activeBeats: any;

  constructor() { }

  ngOnInit() {
  }

  generatePattern() {
    Object.keys(this.activeBeats).forEach(beat => {
      Object.keys(this.activeBeats[beat]).forEach(sixteenth => {
        this.activeBeats[beat][sixteenth] = Math.random() > 0.5;
      });
    });
  }

}
