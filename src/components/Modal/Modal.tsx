import React, { FC } from 'react';
import { IInput } from '../../types/IInput';
import { ModalButton } from '../ModalButton/ModalButton';
import './modal.scss';
import { ModalList } from '../ModalList/ModalList';
import { ModalTitle } from '../ModalTitle/ModalTitle';

interface Props {
  inputs?: IInput[];
  handleInputChange?: () => void;
  handleOk?: () => void;
  handleCancel?: () => void;
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

export const Modal: FC<Props> = ({
  inputs = modalInputs,
  title = 'Booking details:',
  handleInputChange,
  handleOk,
  handleCancel,
}) => {
  return (
    <div className='modal'>
      <div className='modal-overlay'>
        <div className='modal__wrapper'>
          <ModalTitle title={title} />
          <ModalList handleInputChange={handleInputChange} inputs={inputs} />
          <div className='modal__buttons'>
            <ModalButton handleClick={handleOk} title='Ok' />
            <ModalButton handleClick={handleCancel} title='Cancel' />
          </div>
        </div>
      </div>
    </div>
  );
};
