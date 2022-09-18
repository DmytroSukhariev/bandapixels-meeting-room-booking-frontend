import React, { FC, PropsWithChildren } from 'react';
import { useOutsideClick } from '../../hooks/useOutside';
import './modal.scss';

interface Props {
  isOpen: boolean;
  toggleModal: (open: boolean) => void;
}

export const Modal: FC<PropsWithChildren<Props>> = ({
  children,
  isOpen,
  toggleModal,
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  useOutsideClick(() => toggleModal(false), ref);
  return (
    <>
      {isOpen && (
        <div className='modal'>
          <div className='modal-overlay'>
            <div className='modal__wrapper' ref={ref}>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
