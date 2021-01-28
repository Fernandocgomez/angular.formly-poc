import { TestBed } from '@angular/core/testing';

import { GetJsonDataService } from './get-json-data.service';

describe('GetJsonDataService', () => {
  let service: GetJsonDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetJsonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
