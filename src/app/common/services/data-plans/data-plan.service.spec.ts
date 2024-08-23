import { TestBed } from '@angular/core/testing';

import { DataPlanService } from './data-plan.service';

describe('DataPlanService', () => {
  let service: DataPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
