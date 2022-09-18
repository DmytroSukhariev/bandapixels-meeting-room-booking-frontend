import { useParams } from 'react-router-dom';
import { FC } from 'react';
import { Header } from '../components/Header';
import { Room } from '../components/Room';

export const RoomPage: FC = () => {
    let params = useParams();

    return (
        <>
            <Header />

            <Room id={params.roomId} />
        </>
    );
};
