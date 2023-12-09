import { TestBed } from '@angular/core/testing';

import { ApiAttendanceService } from './api-attendance.service';

describe('ApiAttendanceService', () => {
  let service: ApiAttendanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAttendanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
