import './App.css';
import './index.css';
import { MainPage } from './pages/MainPage';
import { MyCalendar } from './components/Calendar';
import { DataContextLayout } from './layouts/DataContextLayout';
import { BookingModal } from './components/BookingModal/BookingModal';
import { Modal } from './components/Modal/Modal';
import { useGetContext } from './layouts/DataContextLayout/useGetContext';
import { InfoModal } from './components/InfoModal/InfoModal';

function App() {
  const { state, setBookingModal, setAboutBookedModal} = useGetContext();
  console.log({ state });
  return (
    <div className='App'>
        <style>
            <link rel='preconnect' href='https://fonts.googleapis.com'/>
            <link rel='preconnect' href='https://fonts.gstatic.com'/>
            <link
                href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
                rel='stylesheet'
            />
        </style>
        <MainPage/>
        <MyCalendar/>
        <Modal isOpen={state.bookingModal || state.aboutBookedModal} toggleModal={setBookingModal}>
            {state.bookingModal && <BookingModal toggleModal={setBookingModal}/>}
            {state.aboutBookedModal && <InfoModal
                toggleModal={setAboutBookedModal}
                bookedRoomInfo={{
                    issuerFirstName: 'Me',
                    issuerLastName: 'MeMe',
                    meetingRoomId: 2,
                    description: 'gdgdfhdfh',
                    numberOfPeople: 2,
                    start: new Date('11.02.13'),
                    end: new Date('11.02.13'),
                }}
            />}
        </Modal>
    </div>
  );
}

export default App;
