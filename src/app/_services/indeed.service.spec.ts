import { TestBed } from '@angular/core/testing';

import { IndeedService } from './indeed.service';

describe('IndeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndeedService = TestBed.get(IndeedService);
    expect(service).toBeTruthy();
  });
});
