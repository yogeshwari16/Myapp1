import { SetMenuModule } from './set-menu.module';

describe('SetMenuModule', () => {
  let setMenuModule: SetMenuModule;

  beforeEach(() => {
    setMenuModule = new SetMenuModule();
  });

  it('should create an instance', () => {
    expect(setMenuModule).toBeTruthy();
  });
});
