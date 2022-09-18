import { FC } from 'react';
import { meetingRooms } from '../../utils/arrays/rooms-list';
import ItemRoom from '../ItemRoom/ItemRoom';
import styles from './Rooms.module.scss';

const RoomsList: FC = () => {
    return (
        <ul className={styles.container}>
            {meetingRooms.map(
                ({ id, peopleCapacity, building, noOfMeetingRoom }) => (
                    <ItemRoom
                        key={id}
                        id={id}
                        peopleCapacity={peopleCapacity}
                        building={building}
                        noOfMeetingRoom={noOfMeetingRoom}
                    />
                )
            )}
        </ul>
    );
};

export default RoomsList;
