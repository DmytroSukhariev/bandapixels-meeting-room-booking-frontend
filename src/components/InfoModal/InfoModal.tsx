import React, { FC } from 'react';
import { useOutsideClick } from '../../hooks/useOutside';
import { ModalButton } from '../ModalButton/ModalButton';
import { ModalInfoList } from '../ModalInfoList/ModalInfoList';
import { ModalTitle } from '../ModalTitle/ModalTitle';
import './info-modal.scss';

interface Props {
  title?: string;
  toggleModal: (open: boolean) => void;
  infoList: string[];
}

export const InfoModal: FC<Props> = ({
  title = 'Booking details',
  toggleModal,
  infoList,
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  useOutsideClick(() => toggleModal(false), ref);

  return (
    <div className='info-modal'>
      <div className='info-modal-overlay'>
        <div className='info-modal__wrapper' ref={ref}>
          <ModalTitle title={title} />
          <ModalInfoList info={infoList} />
          <div className='info-modal__buttons'>
            <ModalButton handleClick={() => toggleModal(false)} title='Ok' />
          </div>
        </div>
      </div>
    </div>
  );
};
