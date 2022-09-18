import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import { MainPage } from './pages/MainPage';
import { MyCalendar } from './components/Calendar';
import { DataContextLayout } from './layouts/DataContextLayout';
import { BookingModal } from './components/BookingModal/BookingModal';
import { Modal } from './components/Modal/Modal';
import { useGetContext } from './layouts/DataContextLayout/useGetContext';
import { InfoModal } from './components/InfoModal/InfoModal';
import { RoomPage } from './pages/RoomPage';

function App() {
    const { state, setBookingModal } = useGetContext();
    console.log({ state });
    return (
        <>
            <style>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
                    rel='stylesheet'
                />
            </style>{' '}
            <Modal isOpen={state.bookingModal} toggleModal={setBookingModal}>
                <BookingModal toggleModal={setBookingModal} />
            </Modal>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage />} />

                    <Route path='/room/:roomId' element={<RoomPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
