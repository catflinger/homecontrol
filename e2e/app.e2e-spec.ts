import { HomecontrolPage } from './app.po';

describe('homecontrol App', () => {
  let page: HomecontrolPage;

  beforeEach(() => {
    page = new HomecontrolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
