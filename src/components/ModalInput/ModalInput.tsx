import React, { ChangeEvent, FC, useState } from 'react';
import { IInput } from '../../types/IInput';
import { InputTypes } from '../../utils/constants/InputTypes';
import { LabelTypes } from '../../utils/constants/LabelTypes';
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
        onChange={handleChange}
        value={inputVal}
        name={variant.toLowerCase()}
      />
    </label>
  );
};
