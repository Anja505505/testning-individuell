import { validatePrime } from './validatePrime';

describe('isPrime function', () => {
  it('should return false for non-prime numbers', () => {
    expect(validatePrime(1)).toBe(false);
    expect(validatePrime(4)).toBe(false);
    expect(validatePrime(9)).toBe(false);
  });

  it('should return true for prime numbers', () => {
    expect(validatePrime(2)).toBe(true);
    expect(validatePrime(3)).toBe(true);
    expect(validatePrime(7)).toBe(true);

  });

  it('should return false for negative numbers and zero', () => {
    expect(validatePrime(0)).toBe(false);
    expect(validatePrime(-5)).toBe(false);
    expect(validatePrime(-10)).toBe(false);
  });
});
