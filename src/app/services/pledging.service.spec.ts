import { TestBed } from '@angular/core/testing';

import { PledgingService } from './pledging.service';

describe('PledgingService', () => {
  let service: PledgingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PledgingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
