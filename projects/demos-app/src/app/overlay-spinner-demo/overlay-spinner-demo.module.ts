import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSelectModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlaySpinnerDemoComponent } from './overlay-spinner-demo.component';
import { OverlaySpinnerModule } from 'ngmat-overlay-spinner';

@NgModule({
  imports: [
    CommonModule,
    OverlaySpinnerModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatRadioModule
  ],
  declarations: [OverlaySpinnerDemoComponent]
})
export class OverlaySpinnerDemoModule {}
