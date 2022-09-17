import React, { FC } from 'react';
import { IInput } from '../../types/IInput';
import { ModalButton } from '../ModalButton/ModalButton';
import './booking-modal.scss';
import { ModalList } from '../ModalList/ModalList';
import { ModalTitle } from '../ModalTitle/ModalTitle';

interface Props {
  inputs?: IInput[];
  handleInputChange?: () => void;
  toggleModal: (open: boolean) => void;
  title?: string;
}

const modalInputs: IInput[] = [
  {
    disabled: false,
    variant: 'NAME',
  },
  {
    disabled: false,
    variant: 'SURNAME',
  },
  {
    disabled: false,
    variant: 'NUMBER_OF_PEOPLE',
  },
  {
    disabled: false,
    variant: 'DESC',
  },
];

export const BookingModal: FC<Props> = ({
  inputs = modalInputs,
  title = 'Booking details:',
  handleInputChange,
  toggleModal,
}) => {
  const handleOk = () => {
    toggleModal(false);
  };
  const handleCancel = () => {
    toggleModal(false);
  };
  return (
    <div className='booking-modal'>
      <ModalTitle title={title} />
      <ModalList handleInputChange={handleInputChange} inputs={inputs} />
      <div className='booking-modal__buttons'>
        <ModalButton handleClick={handleOk} title='Ok' />
        <ModalButton handleClick={handleCancel} title='Cancel' />
      </div>
    </div>
  );
};
