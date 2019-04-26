import { AddReportsModule } from './add-reports.module';

describe('AddReportsModule', () => {
  let addReportsModule: AddReportsModule;

  beforeEach(() => {
    addReportsModule = new AddReportsModule();
  });

  it('should create an instance', () => {
    expect(addReportsModule).toBeTruthy();
  });
});
