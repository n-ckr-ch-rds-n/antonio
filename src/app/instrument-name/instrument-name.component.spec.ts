import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentNameComponent } from './instrument-name.component';

describe('InstrumentNameComponent', () => {
  let component: InstrumentNameComponent;
  let fixture: ComponentFixture<InstrumentNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
