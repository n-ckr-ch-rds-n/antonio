import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatCheckboxChange} from '@angular/material';
import {PingPongDelay} from 'tone';
import {EffectType} from '../effect.type';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.scss']
})
export class DelayComponent implements OnInit {
  EffectType = EffectType;

  @Input()
  delay: PingPongDelay;

  @Output()
  delayChange = new EventEmitter<MatCheckboxChange>();

  constructor() { }

  ngOnInit() {
  }

}
