import { TestBed } from '@angular/core/testing';

import { InterseptorsService } from './interseptors.service';

describe('InterseptorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterseptorsService = TestBed.get(InterseptorsService);
    expect(service).toBeTruthy();
  });
});
