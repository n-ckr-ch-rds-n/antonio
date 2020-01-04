import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrumMachineService {

  drumkitChange = new EventEmitter<any>();

  constructor() { }

}
