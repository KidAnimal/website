import { TestBed } from '@angular/core/testing';

import { ScrollElementService } from './scroll-element.service';

describe('ScrollElementService', () => {
  let service: ScrollElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
