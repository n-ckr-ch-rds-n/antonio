import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnveloperComponent } from './enveloper.component';

describe('EnveloperComponent', () => {
  let component: EnveloperComponent;
  let fixture: ComponentFixture<EnveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
