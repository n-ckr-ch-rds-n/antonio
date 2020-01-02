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

  async connect(effectType: EffectType) {
    const effect = await this.fxService.createEffect(effectType);
    this.fxBank[effectType] = effect;
    this.source.connect(effect);
  }

  disconnect(effectType: string) {
    this.source.disconnect(this.fxBank[effectType]);
    this.fxBank[effectType] = undefined;
  }

  async fxChange(event: MatCheckboxChange): Promise<void> {
    const effectType = event.source.name as EffectType;
    event.checked ? await this.connect(effectType) : this.disconnect(effectType);
  }
}
