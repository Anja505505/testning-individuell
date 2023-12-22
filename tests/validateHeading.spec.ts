import { validateHeading } from './validateHeading';

describe('makeHeading function', () => {
  it('should create an h1 element with the provided text', () => {
    expect(validateHeading('Hello', 1)).toBe('<h1>Hello</h1>');
  });

  it('should create an h2 element with the provided text', () => {
    expect(validateHeading('Next level', 2)).toBe('<h2>Next level</h2>');
  });
});
