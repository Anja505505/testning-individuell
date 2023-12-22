export const validateZip = (zip: string): boolean => {
    if (zip.length === 5 && !isNaN(Number(zip))) {
      return true;
    } else {
      return false;
    }
  };
