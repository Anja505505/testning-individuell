export const validateLowerCase = (input: string): boolean => {
  if (input === '') {
    return false;
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i] < 'a' || input[i] > 'z') {
      return false;
    }
  }
  return true;
};
