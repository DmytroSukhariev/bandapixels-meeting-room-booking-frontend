import { FC, useState } from 'react';
import { MeetingRoom } from '../../types/room';
import people from '../../assets/icon/people.svg';
import styles from './ItemRoom.module.scss';
import { Modal } from '../Modal/Modal';
import { BookingModal } from '../BookingModal/BookingModal';
import { InfoModal } from '../InfoModal/InfoModal';

const ItemRoom: FC<MeetingRoom> = ({
  id,
  building,
  noOfMeetingRoom,
  peopleCapacity,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <>
      <li
        className={`${styles.container} ${isActive ? styles.active : ''}`}
        onClick={() => setIsOpen(true)}
      >
        <h2 className={styles.title}>{`Meeting room ${noOfMeetingRoom}`}</h2>
        <p className={styles.building}>{`${building}st building`}</p>
        <div className={styles.wrapperCapacity}>
          <img src={people} alt='people' />
          <span className={styles.peopleCapacity}>{peopleCapacity}</span>
        </div>
      </li>

      <Modal isOpen={isOpen} toggleModal={toggleModal}>
        <BookingModal toggleModal={toggleModal} />
      </Modal>
      {/* <Modal isOpen={isOpen} toggleModal={toggleModal}>
        <InfoModal toggleModal={toggleModal} infoList={['one', 'two']} />
      </Modal> */}
    </>
  );
};

export default ItemRoom;
