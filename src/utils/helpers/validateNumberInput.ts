export const validateNumberInput = (inputVal: string) => {
  const validationRegex = /^[1-9][0-9]*$/i;
  if (inputVal && inputVal.length > 0 && validationRegex.test(inputVal)) {
    return true;
  } else {
    return false;
  }
};
