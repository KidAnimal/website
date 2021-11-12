import { TestBed } from '@angular/core/testing';

import { ScrollPictureService } from './scroll-picture.service';

describe('ScrollPictureService', () => {
  let service: ScrollPictureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollPictureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
