import { TestBed } from '@angular/core/testing';

import { CarCatalogService } from './car-catalog.service';

describe('CarCatalogServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarCatalogService = TestBed.get(CarCatalogService);
    expect(service).toBeTruthy();
  });
});
