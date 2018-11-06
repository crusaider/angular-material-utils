import { SpinnerOptions, SPINNER_OPTIONS_DATA } from './../spinner-options';
import { Component, OnInit, Input, Inject, Optional } from '@angular/core';
import {
  MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,
  MatProgressSpinnerDefaultOptions
} from '@angular/material';
import { strictEqual } from 'assert';
import { stringify } from '@angular/core/src/util';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngmat-spinner-panel',
  template: `
    <mat-progress-spinner
      [diameter]="options?.diameter"
      [strokeWidth]="options?.strokeWidth"
      [color]="options?.color"
      [mode]="options?.mode"
      [value]="(options?.value)|async">
    </mat-progress-spinner>
    `
})
export class SpinnerPanelComponent implements OnInit {
  options: SpinnerOptions;

  constructor(
    @Optional()
    @Inject(SPINNER_OPTIONS_DATA)
    public _options: SpinnerOptions,
    @Inject(MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS)
    public defaultOptions: MatProgressSpinnerDefaultOptions
  ) {
    if (_options) {
      this.options = _options;
    } else {
      this.options = defaultOptions;
    }
  }

  ngOnInit() {}
}
