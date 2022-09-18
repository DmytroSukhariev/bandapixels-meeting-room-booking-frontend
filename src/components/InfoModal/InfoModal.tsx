import React, { FC } from 'react';
import { IBookedRoom } from '../../types/IBookedRoom';
import { ModalButton } from '../ModalButton/ModalButton';
import { ModalText } from '../ModalText/ModalText';
import { ModalTitle } from '../ModalTitle/ModalTitle';
import './info-modal.scss';

interface Props {
  title?: string;
  toggleModal: (open: boolean) => void;
  bookedRoomInfo: IBookedRoom;
}

export const InfoModal: FC<Props> = ({
  title = 'Room is booked. Details:',
  toggleModal,
  bookedRoomInfo,
}) => {
  return (
    <div className='info-modal'>
      <ModalTitle title={title} />
      <ul className='modal-list'>
        <li className='modal-list__item booking-name'>
          <span>Name: </span>
          <ModalText text={bookedRoomInfo.issuerFirstName} />
        </li>
        <li className='modal-list__item booking-surname'>
          <span>Surname: </span>
          <ModalText text={bookedRoomInfo.issuerLastName} />
        </li>
        <li className='modal-list__item booking-time'>
          <span>Time: </span>
          <ModalText
            text={
              bookedRoomInfo.start.toLocaleString() +
              ' - ' +
              bookedRoomInfo.end.toLocaleString()
            }
          />
        </li>
        {bookedRoomInfo.numberOfPeople && (
          <li className='modal-list__item booking-participants'>
            <span>Other participants: </span>
            <ModalText text={bookedRoomInfo.numberOfPeople.toString()} />
          </li>
        )}
        {bookedRoomInfo.description && (
          <li className='modal-list__item booking-desc'>
            <span>Description: </span>
            <ModalText text={bookedRoomInfo.description} />
          </li>
        )}
      </ul>
      <div className='info-modal__buttons'>
        <ModalButton handleClick={() => toggleModal(false)} title='Ok' />
      </div>
    </div>
  );
};
