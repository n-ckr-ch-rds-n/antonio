import {Component, Input, OnInit} from '@angular/core';
import {Filter} from 'tone';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input()
  filter: Filter;

  constructor() { }

  ngOnInit() {
  }

  frequencyChange(event: any) {
    console.log('FREQ CHANGE', event);
    console.log(this.filter);
  }

}
