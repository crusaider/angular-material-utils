import { Component, OnInit } from '@angular/core';
import { timer, Observable, from } from 'rxjs';
import { ThemePalette, ProgressSpinnerMode } from '@angular/material';
import { tap, take } from 'rxjs/operators';
import { OverlaySpinnerService } from 'ngmat-overlay-spinner';
import { SpinnerOptions } from 'ngmat-overlay-spinner';

@Component({
  selector: 'app-overlay-spinner-demo',
  templateUrl: './overlay-spinner-demo.component.html'
})
export class OverlaySpinnerDemoComponent implements OnInit {
  constructor(private spinner: OverlaySpinnerService) {}

  spinnerDelay = 2000;
  diameter = 100;
  color: ThemePalette = 'primary';
  strokeWidth = 10;
  mode: ProgressSpinnerMode = 'indeterminate';
  optionsType = 'custom';

  ngOnInit() {}

  onShowSpinner(): void {
    let value: Observable<number>;

    if (this.mode === 'indeterminate') {
      timer(this.spinnerDelay).subscribe(() => ref.dismiss());
    } else {
      value = timer(1, 50).pipe(
        take(101),
        tap(null, null, () => ref.dismiss())
      );
    }

    const opts: SpinnerOptions = {
      diameter: this.diameter,
      strokeWidth: this.strokeWidth,
      color: this.color,
      mode: this.mode,
      value: value
    };

    const ref = this.spinner.open(this.optionsType === 'custom' ? opts : null);
  }
}
