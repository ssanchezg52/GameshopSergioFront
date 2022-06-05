import { TestBed } from '@angular/core/testing';

import { CanActivatedGuard } from './can-activated.guard';

describe('CanActivatedGuard', () => {
  let guard: CanActivatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
