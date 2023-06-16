import { TestBed } from '@angular/core/testing';

import { TutoserviceService } from './tutoservice.service';

describe('TutoserviceService', () => {
  let service: TutoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
