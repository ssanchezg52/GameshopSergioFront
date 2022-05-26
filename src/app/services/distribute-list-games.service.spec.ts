import { TestBed } from '@angular/core/testing';

import { DistributeListGamesService } from './distribute-list-games.service';

describe('DistributeListGamesService', () => {
  let service: DistributeListGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistributeListGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
