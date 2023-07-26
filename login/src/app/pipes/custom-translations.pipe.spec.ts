import { CustomTranslationsPipe } from './custom-translations.pipe';

describe('CustomTranslationsPipe', () => {
  const pipe = new CustomTranslationsPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should be return step 1 translate', () => {
    const STEP_1: any = "Fill email field";
    const transform = pipe.transform('STEP_1')
    expect(transform).toEqual(STEP_1);
  });

  it('should be return undefined', () => {
    const UNDEFINED: any = undefined;
    const transform = pipe.transform('UNDEFINED');
    expect(transform).toEqual(UNDEFINED)
  })
});
