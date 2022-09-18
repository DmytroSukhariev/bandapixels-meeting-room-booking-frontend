import { FC } from 'react';
import './styles/room-info.scss';
import '../../styles/header.scss';
import people from '../../assets/icon/people.svg';

type RoomInfoProps = {
    peopleCapacity: number;
    building: string | number;
};

export const RoomInfo: FC<RoomInfoProps> = ({ peopleCapacity, building }) => {
    return (
        <div style={{ marginBottom: '30px' }}>
            <p className='room__info'>
                Bulding <span className='room__quantity'>{building}</span>
            </p>
            <div className='box'>
                <img src={people} alt='people' />
                <p className='room__people'>
                    People
                    <span className='room__quantity'>{peopleCapacity}</span>
                </p>
            </div>
        </div>
    );
};
