import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonosynthComponent } from './monosynth.component';

describe('MonosynthComponent', () => {
  let component: MonosynthComponent;
  let fixture: ComponentFixture<MonosynthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonosynthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonosynthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
