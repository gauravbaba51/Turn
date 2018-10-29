import { TestBed } from '@angular/core/testing';

import { DroppableService } from './dropeble.service';

describe('DropebleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DroppableService = TestBed.get(DroppableService);
    expect(service).toBeTruthy();
  });
});
