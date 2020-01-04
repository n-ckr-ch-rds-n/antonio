import { TestBed } from '@angular/core/testing';

import { DrumMachineService } from './drum-machine.service';

describe('DrumMachineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrumMachineService = TestBed.get(DrumMachineService);
    expect(service).toBeTruthy();
  });
});
