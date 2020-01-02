import {Component, Input, OnInit} from '@angular/core';
import {Effect, Instrument, Player} from 'tone';
import {FxService} from '../fx.service';
import {MatCheckboxChange} from '@angular/material';
import {EffectType} from '../effect.type';


@Component({
  selector: 'app-fx-box',
  templateUrl: './fx-box.component.html',
  styleUrls: ['./fx-box.component.scss']
})
export class FxBoxComponent implements OnInit {
  EffectType = EffectType;
  fxBank: Record<string, Effect> = {
    [EffectType.Delay]: undefined,
    [EffectType.Distortion]: undefined,
    [EffectType.Reverb]: undefined
  };

  @Input()
  source: Player | Instrument;


  constructor(private fxService: FxService) { }

  ngOnInit() {
  }

  async connect(effectName: EffectType) {
    const effect = await this.fxService.createEffect(effectName);
    this.fxBank[effectName] = effect;
    this.source.connect(effect);
  }

  disconnect(effectName: string) {
    this.source.disconnect(this.fxBank[effectName]);
    this.fxBank[effectName] = undefined;
  }

  async fxChange(event: MatCheckboxChange): Promise<void> {
    event.checked ? await this.connect(event.source.name as EffectType) : this.disconnect(event.source.name);
  }
}
