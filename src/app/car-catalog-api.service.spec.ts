import { TestBed } from '@angular/core/testing';

import { CarCatalogApiService } from './car-catalog-api.service';

describe('CarCatalogApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarCatalogApiService = TestBed.get(CarCatalogApiService);
    expect(service).toBeTruthy();
  });
});
