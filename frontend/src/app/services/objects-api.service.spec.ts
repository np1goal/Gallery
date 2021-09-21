import { TestBed } from '@angular/core/testing';

import { ObjectsApiService } from './objects-api.service';

describe('ObjectsApiService', () => {
  let service: ObjectsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
