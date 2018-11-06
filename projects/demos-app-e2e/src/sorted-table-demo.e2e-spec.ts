import { SortedTableDemoPage } from './sorted-table-demo.po';

describe('Demo App Sorted Table Demo Page', () => {
  let page: SortedTableDemoPage;

  beforeEach(() => {
    page = new SortedTableDemoPage();
  });

  it('should have a table component', () => {
    page.navigateTo();
    expect(page.getTableComponentElement().isDisplayed()).toBeTruthy();
  });
});
