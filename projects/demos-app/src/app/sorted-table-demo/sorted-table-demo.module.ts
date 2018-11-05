import { SortedTableModule } from 'ngmat-sorted-table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortedTableDemoComponent } from './sorted-table-demo.component';
import { FormsModule } from '@angular/forms';
import { MatRadioModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    SortedTableModule
  ],
  declarations: [SortedTableDemoComponent]
})
export class SortedTableDemoModule {}
