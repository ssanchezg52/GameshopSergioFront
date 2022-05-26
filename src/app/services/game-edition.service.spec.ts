import { TestBed } from '@angular/core/testing';

import { GameEditionService } from './game-edition.service';

describe('GameEditionService', () => {
  let service: GameEditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameEditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
