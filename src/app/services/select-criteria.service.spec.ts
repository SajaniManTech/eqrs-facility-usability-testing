import { TestBed, inject } from '@angular/core/testing';

import { SelectCriteriaService } from './select-criteria.service';

describe('SelectCriteriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectCriteriaService]
    });
  });

  it('should be created', inject([SelectCriteriaService], (service: SelectCriteriaService) => {
    expect(service).toBeTruthy();
  }));
});
