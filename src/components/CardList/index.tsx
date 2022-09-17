import MeetingRooms from '../../pages/MeetingRooms';
import '../../styles/cards-list.scss';

export const CardsList = () => {
    return (
        <div className='section list-section'>
            <div className='container'>
                <h1 className='title'>Choose a meeting room</h1>
                <MeetingRooms />
            </div>
        </div>
    );
};
