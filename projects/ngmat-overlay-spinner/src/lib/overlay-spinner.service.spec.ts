import { TestBed } from '@angular/core/testing';
import { OverlaySpinnerService } from './overlay-spinner.service';
import { OverlayModule } from '@angular/cdk/overlay';

describe('OverlaySpinnerService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [OverlayModule],
      providers: [OverlaySpinnerService]
    }));

  it('should be created', () => {
    const service: OverlaySpinnerService = TestBed.get(OverlaySpinnerService);
    expect(service).toBeTruthy();
  });
});
