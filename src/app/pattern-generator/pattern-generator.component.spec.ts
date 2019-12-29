import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternGeneratorComponent } from './pattern-generator.component';

describe('PatternGeneratorComponent', () => {
  let component: PatternGeneratorComponent;
  let fixture: ComponentFixture<PatternGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatternGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
