import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchControlsComponent } from './pitch-controls.component';

describe('PitchControlsComponent', () => {
  let component: PitchControlsComponent;
  let fixture: ComponentFixture<PitchControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
