import { Observable, Subject } from 'rxjs';
import { OverlayRef } from '@angular/cdk/overlay';

/**
 * A handle to a spinner overlay, returned by {@link OverlaySpinnerService#open}
 */
export class SpinnerRef {
  private overlayRef: OverlayRef;

  constructor(overlayRef: OverlayRef) {
    this.overlayRef = overlayRef;
  }

  /**
   * Closes the overlay and removes the spinner from display.
   */
  dismiss(): void {
    this.overlayRef.dispose();
  }
}
