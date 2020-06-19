import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-control-knob',
  templateUrl: './control-knob.component.html',
  styleUrls: ['./control-knob.component.scss']
})
export class ControlKnobComponent implements OnInit {
  Math = Math;

  @Input()
  min: number;

  @Input()
  max: number;

  @Input()
  parameter: string;

  @Input()
  value: number;

  @Output()
  parameterChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
