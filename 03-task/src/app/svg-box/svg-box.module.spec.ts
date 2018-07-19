import { SvgBoxModule } from './svg-box.module';

describe('SvgBoxModule', () => {
  let svgBoxModule: SvgBoxModule;

  beforeEach(() => {
    svgBoxModule = new SvgBoxModule();
  });

  it('should create an instance', () => {
    expect(svgBoxModule).toBeTruthy();
  });
});
