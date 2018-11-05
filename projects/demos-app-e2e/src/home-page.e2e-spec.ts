import { HomePage } from './home-page.po';

describe('Demo App Home Page', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should have a main title', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('Angular Material Utils');
  });
});
