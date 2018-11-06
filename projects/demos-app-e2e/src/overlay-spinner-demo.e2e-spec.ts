import { browser } from 'protractor';
import { OverlaySpinnerDemoPage } from './overlay-spinner-demo.po';

describe('Overlay Spinner Demo Page', () => {
  let page: OverlaySpinnerDemoPage;

  beforeEach(() => {
    page = new OverlaySpinnerDemoPage();
    page.navigateTo();
  });

  it('should have a title', () => {
    expect(page.getHeadingText()).toEqual('Overlay Spinner');
  });
  /*
  it('should open the spinner', () => {
    page
      .getOpenSpinnerButtonElement()
      .click()
      .then(() => {
        browser.driver.sleep(500);
        expect(page.getMatSpinnerElement().isDisplayed()).toBeTruthy();
      });
  });
  */
});
