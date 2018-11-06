import { browser, by, element, ElementFinder } from 'protractor';

export class OverlaySpinnerDemoPage {
  navigateTo() {
    return browser.get('/overlay-spinner');
  }

  getHeadingText() {
    return element(by.css('app-overlay-spinner-demo h1')).getText();
  }

  getOpenSpinnerButtonElement(): ElementFinder {
    return element(by.css('app-overlay-spinner-demo button'));
  }

  getMatSpinnerElement() {
    return element(by.css('.mat-progress-spinner'));
  }
}
