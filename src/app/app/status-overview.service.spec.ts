import { TestBed, inject } from '@angular/core/testing';

import { StatusOverviewService } from './status-overview.service';

describe('StatusOverviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatusOverviewService]
    });
  });

  it('should ...', inject([StatusOverviewService], (service: StatusOverviewService) => {
    expect(service).toBeTruthy();
  }));
});
