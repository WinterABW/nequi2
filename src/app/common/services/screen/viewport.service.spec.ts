import { TestBed } from '@angular/core/testing';

import { ViewportService } from './viewport.service';

describe('ViewportServiceService', () => {
  let service: ViewportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
