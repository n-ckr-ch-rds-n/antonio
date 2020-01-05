import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlKnobComponent } from './control-knob.component';

describe('ControlKnobComponent', () => {
  let component: ControlKnobComponent;
  let fixture: ComponentFixture<ControlKnobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlKnobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlKnobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
