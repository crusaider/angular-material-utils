import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { SortDirection, Sort } from '@angular/material/sort';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngmat-sorted-table',
  templateUrl: './sorted-table.component.html',
  styleUrls: ['./sorted-table.component.scss']
})
export class SortedTableComponent implements OnInit {
  @Input()
  rows: string[][];

  @Input()
  headers: string[];

  @Input()
  disableClear = false;

  @Input()
  indexColumn = false;

  @Input()
  sortActive: string;

  @Input()
  sortDirection: SortDirection;

  @Output()
  sortStart = new EventEmitter<void>();

  @Output()
  sortEnd = new EventEmitter<void>();

  @Output()
  sort = new EventEmitter<Sort>();

  constructor() {}

  ngOnInit() {
    if (this.sortActive) {
      this.sortRows({ active: this.sortActive, direction: this.sortDirection });
    }
  }

  sortRows(sort: Sort) {
    this.sort.emit(sort);
    this.sortStart.emit();
    this.rows.sort(
      (a: string[], b: string[]) =>
        (a[sort.active] < b[sort.active] ? -1 : 1) *
        (sort.direction === 'asc' ? 1 : -1)
    );
    this.sortEnd.emit();
  }
}
