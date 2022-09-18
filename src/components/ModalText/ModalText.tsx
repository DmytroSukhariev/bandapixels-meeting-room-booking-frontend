import React, { FC } from 'react';
import './modal-text.scss';

interface Props {
  text: string;
}

export const ModalText: FC<Props> = ({ text }) => {
  return (
    <div className='modal-text'>
      <p className='modal-text__label'>{text}</p>
    </div>
  );
};
