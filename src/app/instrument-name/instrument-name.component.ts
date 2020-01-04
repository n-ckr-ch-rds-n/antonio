import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-instrument-name',
  templateUrl: './instrument-name.component.html',
  styleUrls: ['./instrument-name.component.scss']
})
export class InstrumentNameComponent implements OnInit {
  @Input()
  name: string;

  constructor() { }

  ngOnInit() {
  }

}
