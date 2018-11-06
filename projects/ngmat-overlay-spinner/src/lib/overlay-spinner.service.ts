import { SpinnerOptions, SPINNER_OPTIONS_DATA } from './spinner-options';
import { SpinnerPanelComponent } from './spinner-panel/spinner-panel.component';
import { Injectable, ComponentRef, Injector } from '@angular/core';
import { SpinnerRef } from './spinner-ref';
import { OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { PortalInjector } from '@angular/cdk/portal';
import { OverlayRef } from '@angular/cdk/overlay';
import { Overlay } from '@angular/cdk/overlay';

/**
 * Service that creates a overlay with a spinner, the spinner will stay
 * on screen until {@link SpinnerRef#dismiss()} is called on the
 * {@link SpinnerRef} returned from {@link @SpinnerService#open()}.
 *
 * Heavily inspired by:
 * https://blog.thoughtram.io/angular/2017/11/20/custom-overlays-with-angulars-cdk.html
 */
@Injectable()
export class OverlaySpinnerService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  /**
   * Opens a overlay showing a spinner.
   * {@see SpinnerRef} on how to control the overlay.
   * @param options? : SpinnerOptions
   *
   * @returns: A {@link SpinnerRef} representing the overlay.
   */

  open(options?: SpinnerOptions): SpinnerRef {
    const overlayRef = this.overlay.create(this.overlayConfig);
    const spinnerRef = new SpinnerRef(overlayRef);

    this.attachOverlayContainer(spinnerRef, overlayRef, options);

    return spinnerRef;
  }

  private get overlayConfig(): OverlayConfig {
    const config: OverlayConfig = {};
    config.positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
    config.scrollStrategy = this.overlay.scrollStrategies.block();
    config.hasBackdrop = true;
    return config;
  }

  private createInjector(
    scannerRef: SpinnerRef,
    options: SpinnerOptions
  ): PortalInjector {
    // Instantiate new WeakMap for our custom injection tokens
    const injectionTokens = new WeakMap();

    // Set custom injection tokens
    injectionTokens.set(SpinnerRef, scannerRef);

    if (options) {
      injectionTokens.set(SPINNER_OPTIONS_DATA, options);
    }

    // Instantiate new PortalInjector
    return new PortalInjector(this.injector, injectionTokens);
  }

  private attachOverlayContainer(
    scannerRef: SpinnerRef,
    overlayRef: OverlayRef,
    options: SpinnerOptions
  ) {
    const injector = this.createInjector(scannerRef, options);

    const scannerPortal = new ComponentPortal(
      SpinnerPanelComponent,
      null,
      injector
    );
    const containerRef: ComponentRef<SpinnerPanelComponent> = overlayRef.attach(
      scannerPortal
    );

    return containerRef;
  }
}
