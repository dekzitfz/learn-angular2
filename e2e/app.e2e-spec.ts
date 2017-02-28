import { DekzDirectoryPage } from './app.po';

describe('dekz-directory App', function() {
  let page: DekzDirectoryPage;

  beforeEach(() => {
    page = new DekzDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
