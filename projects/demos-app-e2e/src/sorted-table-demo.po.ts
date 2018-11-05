import { browser, by, element } from 'protractor';

export class SortedTableDemoPage {
  navigateTo() {
    return browser.get('/sorted-table');
  }

  getTableComponentElement() {
    return element(by.css('ngmat-sorted-table'));
  }
}
