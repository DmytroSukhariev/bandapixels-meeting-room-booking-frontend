import React, { useState } from 'react';
import './App.css';
import './index.css';
import { MainPage } from './pages/MainPage';import { Modal } from './components/Modal/Modal';
import { BookingModal } from './components/BookingModal/BookingModal';
import { ModalButton } from './components/ModalButton/ModalButton';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = (open: boolean) => {
    setIsOpen(open);
  };
    return (
        <>
            <style>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
                    rel='stylesheet'
                />
            </style>
            <MainPage /> <ModalButton
        title='Open Modal'
        handleClick={() => setIsOpen(true)}
     />
     
      <Modal isOpen={isOpen}>
        <BookingModal toggleModal={toggleModal} />
      </Modal>
        </>
    );
}

export default App;
