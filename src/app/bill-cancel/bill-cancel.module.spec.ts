import { BillCancelModule } from './bill-cancel.module';

describe('BillCancelModule', () => {
  let billCancelModule: BillCancelModule;

  beforeEach(() => {
    billCancelModule = new BillCancelModule();
  });

  it('should create an instance', () => {
    expect(billCancelModule).toBeTruthy();
  });
});
