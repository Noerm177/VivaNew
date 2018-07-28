import { BusinessUnitMainModule } from './business-unit-main.module';

describe('BusinessUnitMainModule', () => {
  let businessUnitMainModule: BusinessUnitMainModule;

  beforeEach(() => {
    businessUnitMainModule = new BusinessUnitMainModule();
  });

  it('should create an instance', () => {
    expect(businessUnitMainModule).toBeTruthy();
  });
});
