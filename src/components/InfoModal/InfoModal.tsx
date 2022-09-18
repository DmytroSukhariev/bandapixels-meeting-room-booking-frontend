import React, { FC } from 'react';
import { ModalButton } from '../ModalButton/ModalButton';
import { ModalList } from '../ModalList/ModalList';
import { ModalTitle } from '../ModalTitle/ModalTitle';

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
  return (
    <div className='info-modal'>
      <ModalTitle title={title} />
      {/* <ModalInfoList info={infoList} /> */}
      <div className='booking-modal__buttons'>
        <ModalButton handleClick={() => toggleModal(false)} title='Ok' />
      </div>
    </div>
  );
};
