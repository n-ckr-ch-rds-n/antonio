import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PannerComponent } from './panner.component';

describe('PannerComponent', () => {
  let component: PannerComponent;
  let fixture: ComponentFixture<PannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
