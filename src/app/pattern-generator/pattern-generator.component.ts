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

}
