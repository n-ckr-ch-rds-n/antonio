import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalsynthComponent } from './metalsynth.component';

describe('MetalsynthComponent', () => {
  let component: MetalsynthComponent;
  let fixture: ComponentFixture<MetalsynthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalsynthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalsynthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
