import { Component, Renderer2, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TableOfContentService } from '../services/table-of-content/table-of-content.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  toc$ = this.tocService.get();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2,
    private tocService: TableOfContentService
  ) {}

  ngOnInit(): void {
    this.onSelectLightTheme();
  }

  onSelectDarkTheme(): void {
    this.renderer.addClass(document.body, 'app-dark-theme');
    this.renderer.removeClass(document.body, 'app-light-theme');
  }

  onSelectLightTheme(): void {
    this.renderer.addClass(document.body, 'app-light-theme');
    this.renderer.removeClass(document.body, 'app-dark-theme');
  }
}
