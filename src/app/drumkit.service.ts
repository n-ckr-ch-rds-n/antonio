import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrumkitService {

  drumkitChange = new EventEmitter<any>();

  constructor() { }

}
