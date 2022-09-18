import React, { FC } from 'react';
import { InfoVariant } from '../../types/InfoVariant';
import { InfoTypes } from '../../utils/constants/InfoTypes';
import './modal-text.scss';

interface Props {
  text: string;
  variant: InfoVariant;
}

export const ModalText: FC<Props> = ({ text, variant }) => {
  return (
    <div className='modal-text'>
      <p className='modal-text__label'>
        {InfoTypes[variant]}
        <span className='modal-text__info'>{text}</span>
      </p>
    </div>
  );
};
