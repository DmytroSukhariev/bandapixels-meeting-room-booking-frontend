import { FC } from 'react';
import '../../styles/cards-list.scss';
import '../../styles/header.scss';
import RoomsList from '../Rooms/Rooms';

export type CardListProps = {
    setIsOpen: (prop: boolean) => void;
};
export const CardsList: FC = () => {
    return (
        <div className='section list-section'>
            <div className='container'>
                <h1 className='title'>Choose a meeting room</h1>
                <RoomsList />
            </div>
        </div>
    );
};
