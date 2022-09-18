import { FC, useEffect, useState } from 'react';
import { fetchRoomByID, RoomInfoProps } from '../../api/get-room-by-id';
import '../../styles/header.scss';
import { BookingModal } from '../BookingModal/BookingModal';
import { Modal } from '../Modal/Modal';
import './styles/room-info.scss';

type RoomProps = {
    id: string | undefined;
};

const initailState: RoomInfoProps = {
    id: 0,
    peopleCapacity: 0,
    building: '',
    noOfMeetingRoom: 0,
};

export const RoomInfo: FC<RoomProps> = ({ id }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [roomInfo, stRoomInfo] = useState<RoomInfoProps>(initailState);

    const toggleModal = (open: boolean) => {
        setIsOpen(open);
    };
    const getRoomById = async (id: string) => {
        try {
            if (!id) {
                return;
            }
            const result = await fetchRoomByID(id);
            console.log('result', result);
        } catch (error) {
            console.log(error);
        }
    };

    // id && getRoomById(id);

    return (
        <div className='section'>
            <div className='container'>
                <h1 className='room__title' onClick={() => setIsOpen(true)}>
                    Room {id}
                </h1>
                <Modal isOpen={isOpen}>
                    <BookingModal toggleModal={toggleModal} />
                </Modal>
            </div>
        </div>
    );
};
