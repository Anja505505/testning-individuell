import { validateZip } from './validateZip';

describe('validateZip function', () => {
  it('should return true for a correct zipcode', () => {
    expect(validateZip('12345')).toBe(true);
  });

  it('should return false for a zip code that is too short', () => {
    expect(validateZip('1234')).toBe(false);
  });

  it('should return false for a zip code that is too long', () => {
    expect(validateZip('123456')).toBe(false);
  });

  it('should return false for containing letters', () => {
    expect(validateZip('abc')).toBe(false);
  });
});
