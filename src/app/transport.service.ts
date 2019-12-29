import {EventEmitter, Injectable} from '@angular/core';
import * as Tone from 'tone';

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  clock = new EventEmitter<Tone.Encoding.BarsBeatsSixteenths>();
  clockId: number;

  get transport(): Tone.Transport {
    return Tone.Transport;
  }

  constructor() {
    Tone.Transport.loop = true;
    Tone.Transport.loopEnd = '1m';
  }

  play() {
    this.clockId = this.transport.scheduleRepeat(() => {
      this.clock.emit(this.transport.position);
    }, '16n');
    this.transport.start();
  }

  stop() {
    this.transport.clear(this.clockId);
    this.transport.stop();
  }
}
