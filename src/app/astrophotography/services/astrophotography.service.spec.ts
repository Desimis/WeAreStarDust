import { TestBed } from '@angular/core/testing';

import { AstrophotographyService } from './astrophotography.service';

describe('AstrophotographyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AstrophotographyService = TestBed.get(AstrophotographyService);
    expect(service).toBeTruthy();
  });
});
