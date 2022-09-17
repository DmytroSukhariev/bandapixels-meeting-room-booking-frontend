import { FC } from 'react';
import ItemRoom from '../ItemRoom/ItemRoom';
import styles from './Rooms.module.scss';
import {OfficeBuilding} from '../../types/room';

const meetingRooms = [
    {
        id: 1,
        peopleCapacity: 2,
        building: OfficeBuilding.OFFICE_1,
        noOfMeetingRoom: 1,
    },
    {
        id: 2,
        peopleCapacity: 2,
        building: OfficeBuilding.OFFICE_1,
        noOfMeetingRoom: 2,
    },
    {
        id: 3,
        peopleCapacity: 2,
        building: OfficeBuilding.OFFICE_1,
        noOfMeetingRoom: 3,
    },
    {
        id: 4,
        peopleCapacity: 2,
        building: OfficeBuilding.OFFICE_1,
        noOfMeetingRoom: 4,
    },
    {
        id: 5,
        peopleCapacity: 2,
        building: OfficeBuilding.OFFICE_1,
        noOfMeetingRoom: 5,
    },
    {
        id: 6,
        peopleCapacity: 2,
        building: OfficeBuilding.OFFICE_1,
        noOfMeetingRoom: 6,
    },
]

const Rooms: FC = () => {

    return (
        <ul className={styles.container}>
            {meetingRooms.map(({id, peopleCapacity, building, noOfMeetingRoom}) => (
                <ItemRoom
                    key={id}
                    id={id}
                    peopleCapacity={peopleCapacity}
                    building={building}
                    noOfMeetingRoom={noOfMeetingRoom}
                />
            ))}
        </ul>
    );
};

export default Rooms;
