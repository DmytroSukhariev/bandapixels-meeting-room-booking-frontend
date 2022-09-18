import React, { FC } from 'react';
import './modal-title.scss';

interface Props {
  title: string;
}

export const ModalTitle: FC<Props> = ({ title }) => {
  return <h2 className='modal__title'>{title}</h2>;
};
