import { Component } from '@angular/core';
import { TableOfContentService } from '../../services/table-of-content/table-of-content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  toc$ = this.tocService.get();

  constructor(private tocService: TableOfContentService) {}
}
