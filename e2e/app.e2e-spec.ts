import { GreenKeysPage } from './app.po';

describe('green-keys App', () => {
  let page: GreenKeysPage;

  beforeEach(() => {
    page = new GreenKeysPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
