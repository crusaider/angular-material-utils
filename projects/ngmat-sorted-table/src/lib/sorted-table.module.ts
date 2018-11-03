import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortedTableComponent } from './sorted-table.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  imports: [CommonModule, MatSortModule],
  declarations: [SortedTableComponent],
  exports: [SortedTableComponent]
})
export class SortedTableModule {}
