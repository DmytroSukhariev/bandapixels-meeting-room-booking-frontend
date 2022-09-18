import React, { FC } from 'react';
import './modal-text.scss';

interface Props {
  text: string;
}

export const ModalText: FC<Props> = ({ text }) => {
  return <p className='modal__info'>{text}</p>;
};
