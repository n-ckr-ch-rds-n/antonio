import {Component, Input, OnInit} from '@angular/core';
import {Player} from 'tone';
import * as Tone from 'tone';

@Component({
  selector: 'app-fx-box',
  templateUrl: './fx-box.component.html',
  styleUrls: ['./fx-box.component.scss']
})
export class FxBoxComponent implements OnInit {
  @Input()
  source: Player;

  delayFX: any;

  constructor() { }

  ngOnInit() {
  }

  connect() {
    this.delayFX = new Tone.PingPongDelay('16n', 0.2).toMaster();
    this.source.connect(this.delayFX);
  }

  disconnect() {
    this.source.disconnect(this.delayFX);
  }

  delayChange(event: Event): void {
    (event.target as HTMLInputElement).checked ? this.connect() : this.disconnect();
  }
}
