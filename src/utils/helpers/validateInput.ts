import { InputVariant } from '../../types/InputVariant';

export const validateInput = (inputVal: string, variant: InputVariant) => {
  const validationRegex = /^[1-9][0-9]*$/i;
  let res = true;
  switch (variant) {
    case 'NUMBER_OF_PEOPLE':
      if (inputVal && inputVal.length > 0 && !validationRegex.test(inputVal)) {
        res = false;
      }
      break;
    case 'DESC':
      if (inputVal && inputVal.length > 500) {
        res = false;
      }
      break;
    default:
      res = true;
      break;
  }
  return res;
};
