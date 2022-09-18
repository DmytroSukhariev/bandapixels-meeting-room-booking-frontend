import { FC, useEffect, useState } from 'react';
import { fetchRoomByID, RoomInfoProps } from '../../api/get-room-by-id';
import { BookingModal } from '../BookingModal/BookingModal';
import { Modal } from '../Modal/Modal';
import './styles/room-info.scss';
import '../../styles/header.scss';
import { RoomInfo } from './room-info';
import { MyCalendar } from '../Calendar';
import { useGetContext } from '../../layouts/DataContextLayout/useGetContext';

type RoomProps = {
    id: string | undefined;
};

const initailState: RoomInfoProps = {
    id: 0,
    peopleCapacity: 2,
    building: '2',
    noOfMeetingRoom: 0,
};

export const Room: FC<RoomProps> = ({ id }) => {
    const { state, setBookingModal } = useGetContext();
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
    // useEffect(() => {
    //     id && getRoomById(id);
    // }, [id]);

    return (
        <div className='section'>
            <div className='container'>
                <h1 className='room__title' onClick={() => setIsOpen(true)}>
                    Room {id}
                </h1>
                <RoomInfo
                    peopleCapacity={roomInfo.peopleCapacity}
                    building={roomInfo.building}
                />
                <MyCalendar />
                <Modal
                    isOpen={state.bookingModal}
                    toggleModal={setBookingModal}
                >
                    <BookingModal toggleModal={setBookingModal} />
                </Modal>
            </div>
        </div>
    );
};
