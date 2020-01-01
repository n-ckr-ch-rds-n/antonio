import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynthControlsComponent } from './synth-controls.component';

describe('SynthControlsComponent', () => {
  let component: SynthControlsComponent;
  let fixture: ComponentFixture<SynthControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynthControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynthControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
