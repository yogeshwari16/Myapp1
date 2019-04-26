import { DisplayMenuModule } from './display-menu.module';

describe('DisplayMenuModule', () => {
  let displayMenuModule: DisplayMenuModule;

  beforeEach(() => {
    displayMenuModule = new DisplayMenuModule();
  });

  it('should create an instance', () => {
    expect(displayMenuModule).toBeTruthy();
  });
});
