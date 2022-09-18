import React, { FC } from 'react';
import { IBookedInfo } from '../../types/IBookedInfo';
import { InfoTypes } from '../../utils/constants/InfoTypes';
import './modal-text.scss';

export const ModalText: FC<IBookedInfo> = ({ text, variant }) => {
  return (
    <div className='modal-text'>
      <p className='modal-text__label'>
        {InfoTypes[variant]}
        <span className='modal-text__info'>{text}</span>
      </p>
    </div>
  );
};
