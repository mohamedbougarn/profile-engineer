import { TestBed } from '@angular/core/testing';

import { BackservicesService } from './backservices.service';

describe('BackservicesService', () => {
  let service: BackservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
