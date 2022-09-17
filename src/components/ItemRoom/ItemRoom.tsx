import {FC, useState} from 'react';
import { MeetingRoom } from '../../types/room';
import people from '../../assets/icon/people.svg';
import styles from './ItemRoom.module.scss';

const ItemRoom: FC<MeetingRoom> = ({
    id,
    building,
    noOfMeetingRoom,
    peopleCapacity,
    }) => {
    const [isActive, setActive] = useState(false);

    return (
        <li className={`${styles.container} ${isActive ? styles.active : ''}`} onClick={() => setActive(!isActive)}>
            <h2 className={styles.title}>{`Meeting room ${noOfMeetingRoom}`}</h2>
            <p className={styles.building}>{`${building}st building`}</p>
            <div className={styles.wrapperCapacity}>
                <img src={people} alt="people" />
                <span className={styles.peopleCapacity}>{peopleCapacity}</span>
            </div>
        </li>
    );
};

export default ItemRoom;
