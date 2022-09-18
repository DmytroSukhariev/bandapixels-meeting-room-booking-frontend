import React, { FC } from 'react';
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
  return (
    <div className='info-modal'>
      <ModalTitle title={title} />
      <ModalInfoList info={infoList} />
      <div className='info-modal__buttons'>
        <ModalButton handleClick={() => toggleModal(false)} title='Ok' />
      </div>
    </div>
  );
};
