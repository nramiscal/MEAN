import { TestBed, inject } from '@angular/core/testing';

import { NumsService } from './nums.service';

describe('NumsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumsService]
    });
  });

  it('should be created', inject([NumsService], (service: NumsService) => {
    expect(service).toBeTruthy();
  }));
});
