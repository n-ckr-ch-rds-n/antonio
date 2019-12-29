import {Component, Input, OnInit} from '@angular/core';
import {Player} from 'tone';
import {FxService} from '../fx.service';

@Component({
  selector: 'app-fx-box',
  templateUrl: './fx-box.component.html',
  styleUrls: ['./fx-box.component.scss']
})
export class FxBoxComponent implements OnInit {
  @Input()
  source: Player;

  activeFX: Array<{name: string, effect: any}> = [];

  constructor(private fxService: FxService) { }

  ngOnInit() {
  }

  connect(effectName: string) {
    const effect = this.fxService.createEffect(effectName);
    this.activeFX.push({name: effectName, effect});
    this.source.connect(effect);
  }

  disconnect(effectName: string) {
    this.source.disconnect((this.activeFX.find(effect => effect.name === effectName)).effect);
    this.activeFX = this.activeFX.filter(effect => effect.name !== effectName);
  }

  fxChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.checked ? this.connect(input.name) : this.disconnect(input.name);
  }
}
