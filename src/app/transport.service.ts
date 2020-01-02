import {EventEmitter, Injectable} from '@angular/core';
import * as Tone from 'tone';

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  recorder: MediaRecorder;
  recordData: Array<any>;

  get transport(): Tone.Transport {
    return Tone.Transport;
  }

  constructor() {
    Tone.Transport.loop = true;
    Tone.Transport.loopEnd = '1m';
  }

  async record(): Promise<void> {
    this.recorder = await this.createRecorder();
    this.recordData = [];
    this.recorder.start();
    this.recorder.ondataavailable = (e) => this.recordData.push(e.data);
  }

  async stopRecording() {
    this.recorder.stop();
    await this.downloadRecording();
  }

  async downloadRecording() {
    const blob = new Blob(this.recordData, {type: 'audio/ogg; codecs=opus'});
    const link = document.createElement('a') as HTMLAnchorElement;
    link.href = URL.createObjectURL(blob);
    link.download = `antonio-${Math.random().toString(36).substring(7)}`;
    link.click();
  }

  async createRecorder(): Promise<MediaRecorder> {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({audio: true});
      return new MediaRecorder(stream);
    } catch (err) {
      console.log(err.message);
    }
  }

  play(): Tone.Transport {
    return this.transport.start();
  }

  stop(): Tone.Transport {
    return this.transport.stop();
  }
}
