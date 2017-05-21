import { NgMaterialPage } from './app.po';

describe('ng-material App', () => {
  let page: NgMaterialPage;

  beforeEach(() => {
    page = new NgMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
