import { GroundModule } from './ground.module';

describe('GroundModule', () => {
  let groundModule: GroundModule;

  beforeEach(() => {
    groundModule = new GroundModule();
  });

  it('should create an instance', () => {
    expect(groundModule).toBeTruthy();
  });
});
