import { TestBed } from '@angular/core/testing';

import { PrudctRequestService } from './prudct-request.service';

describe('PrudctRequestService', () => {
  let service: PrudctRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrudctRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
