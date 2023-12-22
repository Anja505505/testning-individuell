import { validateGenitiv } from './validateGenitiv'

describe('getGenitive', () => {
    it('should return genitive form for given names', () => {
      expect(validateGenitiv('Jonatan')).toBe('Jonatans');
      expect(validateGenitiv('Anna')).toBe('Annas');
      expect(validateGenitiv('Claes')).toBe('Claess');
      expect(validateGenitiv('Hampus')).toBe('Hampuss');
      expect(validateGenitiv('Johanna')).toBe('Johannas');
    });
  });
