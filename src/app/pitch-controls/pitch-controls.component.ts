import {Component, OnInit} from '@angular/core';
import {notesByKey} from '../pattern-generator/notes.by.key';
import {Mood} from '../mood';

@Component({
  selector: 'app-pitch-controls',
  templateUrl: './pitch-controls.component.html',
  styleUrls: ['./pitch-controls.component.scss']
})
export class PitchControlsComponent implements OnInit {
  Object = Object;
  notesByKey = notesByKey;
  Mood = Mood;

  constructor() {
  }

  ngOnInit() {
  }

}
