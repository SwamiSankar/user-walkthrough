export const determineValidation = (isTouched, isValid) => {
  if (isTouched) {
    if (!isValid) {
      return 'invalid';
    }
    return '';
  }
  return '';
};
