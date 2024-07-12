import { TestBed } from '@angular/core/testing';

import { JestServiceService } from './jest-service.service';

describe('JestServiceService', () => {
  let service: JestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
