import { validateLowerCase } from './validateLowerCase';


describe('isLowerCase function', () => {
  it('should return true for an all lowercase string', () => {
    const result = validateLowerCase('abcdef');
    expect(result).toBe(true);
  });

  it('should return false for a string with uppercase letters', () => {
    const result = validateLowerCase('AbCdeF');
    expect(result).toBe(false);
  });

  it('should return false for an empty string', () => {
    const result = validateLowerCase('');
    expect(result).toBe(false);
  });

  it('should return false for a string with numbers and symbols', () => {
    const result = validateLowerCase('abc123!@#');
    expect(result).toBe(false);
  });
});
