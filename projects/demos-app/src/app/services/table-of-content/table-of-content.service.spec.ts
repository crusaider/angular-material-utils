import { TestBed } from '@angular/core/testing';

import { TableOfContentService } from './table-of-content.service';

describe('TableOfContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableOfContentService = TestBed.get(TableOfContentService);
    expect(service).toBeTruthy();
  });
});
