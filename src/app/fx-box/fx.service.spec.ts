import { TestBed } from '@angular/core/testing';

import { FxService } from './fx.service';

describe('FxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FxService = TestBed.get(FxService);
    expect(service).toBeTruthy();
  });
});
