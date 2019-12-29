import {Component, Input, OnInit} from '@angular/core';
import {Instrument, Player} from 'tone';
import {FxService} from '../fx.service';
import {MatCheckboxChange} from '@angular/material';

@Component({
  selector: 'app-fx-box',
  templateUrl: './fx-box.component.html',
  styleUrls: ['./fx-box.component.scss']
})
export class FxBoxComponent implements OnInit {
  @Input()
  source: Player | Instrument;

  activeFX: Array<{name: string, effect: any}> = [];

  constructor(private fxService: FxService) { }

  ngOnInit() {
  }

  async connect(effectName: string) {
    const effect = await this.fxService.createEffect(effectName);
    this.activeFX.push({name: effectName, effect});
    this.source.connect(effect);
  }

  disconnect(effectName: string) {
    this.source.disconnect((this.activeFX.find(effect => effect.name === effectName)).effect);
    this.activeFX = this.activeFX.filter(effect => effect.name !== effectName);
  }

  async fxChange(event: MatCheckboxChange): Promise<void> {
    console.log(event);
    event.checked ? await this.connect(event.source.name) : this.disconnect(event.source.name);
  }
}
