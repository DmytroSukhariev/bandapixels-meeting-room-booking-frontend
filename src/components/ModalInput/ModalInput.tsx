import React, { ChangeEvent, FC, useState } from 'react';
import { IInput } from '../../types/IInput';
import { InputVariant } from '../../types/InputVariant';
import { InputTypes } from '../../utils/constants/InputTypes';
import { LabelTypes } from '../../utils/constants/LabelTypes';
import { validateNumberInput } from '../../utils/helpers/validateNumberInput';
import './modal-input.scss';

interface Props extends IInput {
  handleInputChange?: () => void;
}

export const ModalInput: FC<Props> = ({
  disabled,
  handleInputChange,
  variant,
}) => {
  const [inputVal, setInputVal] = useState('');

  const handleChange = (
    variant: InputVariant,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (
      e.target.value.length > 0 &&
      variant === 'NUMBER_OF_PEOPLE' &&
      !validateNumberInput(e.target.value)
    ) {
      return;
    }
    setInputVal(e.target.value);

    if (!disabled && handleInputChange) {
      handleInputChange();
    }
  };
  return (
    <label htmlFor={variant.toLowerCase()} className='modal-input-label'>
      {LabelTypes[variant]}
      <input
        type={InputTypes[variant]}
        className={`modal-input input-${variant
          .toLowerCase()
          .replaceAll('_', '-')}`}
        onChange={(e) => handleChange(variant, e)}
        value={inputVal}
        name={variant.toLowerCase()}
      />
    </label>
  );
};
