import { TestBed } from '@angular/core/testing';

import { ArbeitszeitService } from './arbeitszeit.service';

describe('ArbeitszeitService', () => {
  let service: ArbeitszeitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArbeitszeitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
