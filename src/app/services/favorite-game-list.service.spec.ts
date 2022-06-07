import { TestBed } from '@angular/core/testing';

import { FavoriteGameListService } from './favorite-game-list.service';

describe('FavoriteGameListService', () => {
  let service: FavoriteGameListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteGameListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
