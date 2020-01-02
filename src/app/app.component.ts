import {Component, OnInit} from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'antonio';

  async ngOnInit() {
    await (Tone.context as any as AudioContext).resume();
    console.log(Tone.context);
  }
}
