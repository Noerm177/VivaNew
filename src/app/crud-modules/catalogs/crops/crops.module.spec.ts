import { CropsModule } from './crops.module';

describe('CropsModule', () => {
  let cropsModule: CropsModule;

  beforeEach(() => {
    cropsModule = new CropsModule();
  });

  it('should create an instance', () => {
    expect(cropsModule).toBeTruthy();
  });
});
