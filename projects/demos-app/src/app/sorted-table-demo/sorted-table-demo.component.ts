import { Component } from '@angular/core';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-sorted-table-demo',
  templateUrl: './sorted-table-demo.component.html',
  styleUrls: ['./sorted-table-demo.component.scss']
})
export class SortedTableDemoComponent {
  headers1 = ['Header 1', 'Header 2', 'Header 3', 'Header 4'];
  rows1 = [
    ['Row 1 Cell 1', 'Row 1 Cell 2', 'Row 1 Cell 3', 'Row 1 Cell 4'],
    ['Row 2 Cell 1', 'Row 2 Cell 2', 'Row 2 Cell 3', 'Row 2 Cell 4'],
    ['Row 3 Cell 1', 'Row 3 Cell 2', 'Row 3 Cell 3', 'Row 3 Cell 4']
  ];

  themeClass = 'app-light-theme';

  indexColumn = false;
  disableClear: false;

  events: string[] = [];
  eventCounter = 1;

  onSortStart(): void {
    this.logEvent('Sort start');
  }

  onSort(sort: Sort): void {
    this.logEvent(
      `Sort - Column: ${this.headers1[sort.active]} Direction: ${
        sort.direction
      }`
    );
  }

  onSortEnd(): void {
    this.logEvent('Sort end');
  }

  private logEvent(msg: string) {
    this.events.unshift(`${this.eventCounter++}: ${msg}`);
    /*
    if (this.events.length > 20) {
      this.events.pop();
    }
    */
  }
}
