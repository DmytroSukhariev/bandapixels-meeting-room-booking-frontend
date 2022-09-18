import React, { FC, useEffect } from 'react';
import { IInput } from '../../types/IInput';
import { ModalButton } from '../ModalButton/ModalButton';
import { ModalList } from '../ModalList/ModalList';
import { ModalTitle } from '../ModalTitle/ModalTitle';
import { modalInputs } from '../../utils/arrays/input-list';
import './booking-modal.scss';

export interface Props {
  inputs?: IInput[];
  handleInputChange?: () => void;
  toggleModal: (open: boolean) => void;
  title?: string;
}

export const BookingModal: FC<Props> = ({
  inputs = modalInputs,
  title = 'Booking details:',
  handleInputChange,
  toggleModal,
}) => {
  // useEffect(() => {
  //   const data = fetch('https://a66d-77-120-226-129.eu.ngrok.io/meeting-room', {
  //     method: 'GET',
  //   });
  //   console.log(data);
  // }, []);
  return (
    <div className='booking-modal'>
      <ModalTitle title={title} />
      <ModalList handleInputChange={handleInputChange} inputs={inputs} />
      <div className='booking-modal__buttons'>
        <ModalButton handleClick={() => toggleModal(false)} title='Ok' />
        <ModalButton handleClick={() => toggleModal(false)} title='Cancel' />
      </div>
    </div>
  );
};
