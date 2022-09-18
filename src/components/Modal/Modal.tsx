import React, { FC, PropsWithChildren } from 'react';
import './modal.scss';

interface Props {
  isOpen: boolean;
}

export const Modal: FC<PropsWithChildren<Props>> = ({ children, isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className='modal'>
          <div className='modal-overlay'>
            <div className='modal__wrapper'>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
