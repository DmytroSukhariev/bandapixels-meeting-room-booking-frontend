import React, { ChangeEvent, FC, useState } from 'react';
import { IInput } from '../../types/IInput';
import { InputVariant } from '../../types/InputVariant';
import { InputTypes } from '../../utils/constants/InputTypes';
import { LabelTypes } from '../../utils/constants/LabelTypes';
import { validateInput } from '../../utils/helpers/validateInput';
import './modal-input.scss';

interface Props extends IInput {
  handleInputChange: (value: string) => void;
  value: string;
}

export const ModalInput: FC<Props> = ({
  disabled,
  handleInputChange,
  variant,
  value,
}) => {
  // const [inputVal, setInputVal] = useState('');

  // const handleChange = (
  //   variant: InputVariant,
  //   e: ChangeEvent<HTMLInputElement>
  // ) => {
  //   if (
  //     e.target.value.length > 0 &&
  //     variant === 'NUMBER_OF_PEOPLE' &&
  //     !validateNumberInput(e.target.value)
  //   ) {
  //     return;
  //   }
  //   // setInputVal(e.target.value);
  //   handleInputChange(e.target.value)
  //
  //   if (!disabled && handleInputChange) {
  //     handleInputChange();
  //   }
  // };

  return (
    <label htmlFor={variant.toLowerCase()} className='modal-input-label'>
      {LabelTypes[variant]}
      {variant !== 'DESC' ? (
        <input
          type={InputTypes[variant]}
          className={`modal-input input-${variant
            .toLowerCase()
            .replaceAll('_', '-')}`}
          onChange={(e) => handleInputChange(e.target.value)}
          value={value}
          name={variant.toLowerCase()}
        />
      ) : (
        <textarea
          name={variant.toLowerCase()}
          rows={4}
          className='modal-input'
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
        ></textarea>
      )}
    </label>
  );
};
