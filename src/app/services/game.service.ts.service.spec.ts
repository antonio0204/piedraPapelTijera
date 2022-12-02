import { TestBed } from '@angular/core/testing';

import { GameServiceTsService } from './game.service.ts.service';

describe('GameServiceTsService', () => {
  let service: GameServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
