import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { TableOfContent } from './table-of-content';

@Injectable({
  providedIn: 'root'
})
export class TableOfContentService {
  constructor(private http: HttpClient) {}

  private tableOfContent: TableOfContent;

  get(): Observable<TableOfContent> {
    if (this.tableOfContent) {
      return of(this.tableOfContent);
    } else {
      return this.http
        .get<TableOfContent>('assets/toc.json')
        .pipe(tap(toc => (this.tableOfContent = toc)));
    }
  }
}
