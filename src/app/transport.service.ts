import { Injectable } from '@angular/core';
import * as Tone from 'tone';

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  private $transport: Tone.Transport;

  get transport(): Tone.Transport {
    if (!this.$transport) {
      this.$transport = new Tone.Transport();
    }
    return this.$transport;
  }

  constructor() { }
}
