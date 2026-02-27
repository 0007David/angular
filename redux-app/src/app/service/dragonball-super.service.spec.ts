import { TestBed } from '@angular/core/testing';

import { DragonballSuperService } from './dragonball-super.service';

describe('DragonballSuperService', () => {
  let service: DragonballSuperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragonballSuperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
