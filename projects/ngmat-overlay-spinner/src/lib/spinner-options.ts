import { ThemePalette, ProgressSpinnerMode } from '@angular/material';
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface SpinnerOptions {
  color?: ThemePalette;
  diameter?: number;
  strokeWidth?: number;
  mode?: ProgressSpinnerMode;
  value?: Observable<number>;
}

export const SPINNER_OPTIONS_DATA = new InjectionToken<SpinnerOptions>(
  'SPINNER_OPTIONS_DATA'
);
