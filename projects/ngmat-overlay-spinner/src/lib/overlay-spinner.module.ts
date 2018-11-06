import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerPanelComponent } from './spinner-panel/spinner-panel.component';
import { OverlaySpinnerService } from './overlay-spinner.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [CommonModule, OverlayModule, MatProgressSpinnerModule],
  declarations: [SpinnerPanelComponent],
  entryComponents: [SpinnerPanelComponent],
  providers: [OverlaySpinnerService]
})
export class OverlaySpinnerModule {}
