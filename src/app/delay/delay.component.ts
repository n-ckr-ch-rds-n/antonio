import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatCheckboxChange} from '@angular/material';
import {PingPongDelay} from 'tone';
import {EffectType} from '../fx-box/effect.type';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.scss']
})
export class DelayComponent implements OnInit {
  EffectType = EffectType;
  delayFields: string[] = ['delayTime', 'feedback'];

  @Input()
  delay: PingPongDelay;

  @Output()
  delayChange = new EventEmitter<MatCheckboxChange>();

  constructor() { }

  ngOnInit() {
  }

}
