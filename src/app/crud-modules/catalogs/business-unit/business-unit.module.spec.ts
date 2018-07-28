import { BusinessUnitModule } from './business-unit.module';

describe('BusinessUnitModule', () => {
  let businessUnitModule: BusinessUnitModule;

  beforeEach(() => {
    businessUnitModule = new BusinessUnitModule();
  });

  it('should create an instance', () => {
    expect(businessUnitModule).toBeTruthy();
  });
});
