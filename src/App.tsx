import React, { useState } from 'react';
import './App.css';
import { Modal } from './components/Modal/Modal';
import { BookingModal } from './components/BookingModal/BookingModal';
import { ModalButton } from './components/ModalButton/ModalButton';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <div className='App'>
      {' '}
      <ModalButton
        title='Open Modal'
        handleClick={() => setIsOpen(true)}
      ></ModalButton>
      <Modal isOpen={isOpen}>
        <BookingModal toggleModal={toggleModal} />
      </Modal>
    </div>
  );
}

export default App;
