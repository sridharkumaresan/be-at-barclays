import { TestBed } from '@angular/core/testing';

import { ModuleLoadingStrategyService } from './module-loading-strategy.service';

describe('ModuleLoadingStrategyService', () => {
  let service: ModuleLoadingStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleLoadingStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
