import { Injectable } from '@angular/core';
import * as Tone from 'tone';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  get transport(): Tone.Transport {
    return Tone.Transport;
  }

  constructor() { }
}
