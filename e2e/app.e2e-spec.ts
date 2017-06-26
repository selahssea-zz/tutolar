import { TutolarPage } from './app.po';

describe('tutolar App', () => {
  let page: TutolarPage;

  beforeEach(() => {
    page = new TutolarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
