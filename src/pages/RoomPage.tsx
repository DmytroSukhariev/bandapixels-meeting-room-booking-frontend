import { useParams } from 'react-router-dom';
import { FC } from 'react';
import { Header } from '../components/Header';
import { RoomInfo } from '../components/Room';

export const RoomPage: FC = () => {
    let params = useParams();

    return (
        <>
            <Header />

            <RoomInfo id={params.roomId} />
        </>
    );
};
