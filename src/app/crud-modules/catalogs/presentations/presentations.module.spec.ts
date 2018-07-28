import { PresentationsModule } from './presentations.module';

describe('PresentationsModule', () => {
  let presentationsModule: PresentationsModule;

  beforeEach(() => {
    presentationsModule = new PresentationsModule();
  });

  it('should create an instance', () => {
    expect(presentationsModule).toBeTruthy();
  });
});
