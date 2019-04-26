import { AddPrevilagesModule } from './add-previlages.module';

describe('AddPrevilagesModule', () => {
  let addPrevilagesModule: AddPrevilagesModule;

  beforeEach(() => {
    addPrevilagesModule = new AddPrevilagesModule();
  });

  it('should create an instance', () => {
    expect(addPrevilagesModule).toBeTruthy();
  });
});
