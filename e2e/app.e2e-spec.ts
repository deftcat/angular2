import { DreamPage } from './app.po';

describe('dream App', () => {
  let page: DreamPage;

  beforeEach(() => {
    page = new DreamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
