import { TestBed } from '@angular/core/testing';

import { UserandtokenService } from './userandtoken.service';

describe('UserandtokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserandtokenService = TestBed.get(UserandtokenService);
    expect(service).toBeTruthy();
  });
});
