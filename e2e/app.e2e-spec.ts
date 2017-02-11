import { NewWebComponentsPage } from './app.po';

describe('new-web-components App', function() {
  let page: NewWebComponentsPage;

  beforeEach(() => {
    page = new NewWebComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
