import React, { FC } from 'react';
import './modal-button.scss';

interface Props {
  title: string;
  handleClick?: () => void;
}

export const ModalButton: FC<Props> = ({ handleClick, title }) => {
  return (
    <button className='modal-button' onClick={handleClick}>
      {title}
    </button>
  );
};
