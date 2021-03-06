import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Filter} from 'tone';
import {EffectType} from '../fx-box/effect.type';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {FilterType} from './filter.type';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  EffectType = EffectType;
  FilterType = FilterType;
  Object = Object;

  @Input()
  filter: Filter;

  @Output()
  filterChange = new EventEmitter<MatCheckboxChange>();

  constructor() { }

  ngOnInit() {
  }

}
