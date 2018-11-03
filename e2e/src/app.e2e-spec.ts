import { AppPage } from './app.po';

describe('Demo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display page main heading', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('Sorted Table Demo');
  });

  it('should have a table component', () => {
    page.navigateTo(),
      expect(page.getTableComponentElement().isDisplayed()).toBeTruthy();
  });
});
