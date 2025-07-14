import { TestBed } from '@angular/core/testing';

import { HeaderLinkService } from './header-link-service';

describe('HeaderLinkService', () => {
  let service: HeaderLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
