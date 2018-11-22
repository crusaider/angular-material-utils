import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderModule } from '../slider/slider.module';
import { SliderDemoComponent } from './slider-demo.component';

@NgModule({
  imports: [CommonModule, SliderModule],
  declarations: [SliderDemoComponent]
})
export class SliderDemoModule {}
