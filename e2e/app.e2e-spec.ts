import { NameChangerPage } from './app.po';

describe('name-changer App', () => {
  let page: NameChangerPage;

  beforeEach(() => {
    page = new NameChangerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
