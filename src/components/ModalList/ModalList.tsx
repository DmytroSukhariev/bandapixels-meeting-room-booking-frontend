import React, { FC } from 'react';
import { IInput } from '../../types/IInput';
import { ModalInput } from '../ModalInput/ModalInput';
import './modal-list.scss';

interface Props {
  inputs: IInput[];
  handleInputChange?: () => void;
}

export const ModalList: FC<Props> = ({ inputs, handleInputChange }) => {
  return (
    <ul className='modal-list'>
      {inputs.map((item, index) => {
        return (
          <li className='modal-list__item' key={index}>
            <ModalInput
              disabled={item.disabled}
              handleInputChange={handleInputChange}
              variant={item.variant}
            />
          </li>
        );
      })}
    </ul>
  );
};
