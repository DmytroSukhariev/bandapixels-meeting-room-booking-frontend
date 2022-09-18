import { FC } from 'react';
import './styles/room-info.scss';
import '../../styles/header.scss';

type RoomInfoProps = {
    peopleCapacity: number;
    building: string | number;
};
export const RoomInfo: FC<RoomInfoProps> = ({ peopleCapacity, building }) => {
    return (
        <div>
            <p className='room__info'>{building}</p>
            <p className='room__info'>{peopleCapacity}</p>
        </div>
    );
};
