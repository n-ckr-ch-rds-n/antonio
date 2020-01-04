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
    this.recorder.ondataavailable = (e) => this.saveAudioData(e);
    this.recorder.onstop = async () => await this.downloadRecording();
    this.recorder.start();
  }

  saveAudioData(audioEvent: any) {
    this.recordData.push(audioEvent.data);
    console.log('Data', this.recordData);
  }

  async stopRecording() {
    this.recorder.stop();
  }

  async downloadRecording() {
    const audio = document.querySelector('audio');
    const blob = new Blob(this.recordData, {type: 'audio/webm; codecs=opus'});
    audio.src = URL.createObjectURL(blob);
    // const link = document.createElement('a') as HTMLAnchorElement;
    // link.href = ;
    // link.download = `antonio-${Math.random().toString(36).substring(7)}`;
    // link.click();
  }

  async createRecorder(): Promise<MediaRecorder> {
    try {
      const actx = Tone.context as any as AudioContext;
      const dest = actx.createMediaStreamDestination();
      (Tone.Master as any).connect(dest);
      return new MediaRecorder(dest.stream);
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
