import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynthBankComponent } from './synth-bank.component';

describe('SynthBankComponent', () => {
  let component: SynthBankComponent;
  let fixture: ComponentFixture<SynthBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynthBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynthBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
