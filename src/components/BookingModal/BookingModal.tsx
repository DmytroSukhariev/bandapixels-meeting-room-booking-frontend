import React, {FC, useEffect} from 'react';
import {IInput} from '../../types/IInput';
import {ModalButton} from '../ModalButton/ModalButton';
import {ModalList} from '../ModalList/ModalList';
import {ModalTitle} from '../ModalTitle/ModalTitle';
import {modalInputs} from '../../utils/arrays/input-list';
import './booking-modal.scss';
import {ModalInput} from "../ModalInput/ModalInput";
import {useGetContext} from "../../layouts/DataContextLayout/useGetContext";

export interface Props {
    inputs?: IInput[];
    handleInputChange?: () => void;
    toggleModal: (open: boolean) => void;
    title?: string;
}

export const BookingModal: FC<Props> = ({
                                            inputs = modalInputs,
                                            title = 'Booking details:',
                                            handleInputChange,
                                            toggleModal,
                                        }) => {
    const {state, setCurrentBackendEvent} = useGetContext()
    return (
        <div className='booking-modal'>
            <ModalTitle title={title}/>
            <ModalInput
                disabled={false}
                handleInputChange={
                    (value) => {
                        setCurrentBackendEvent({...state.currentEvent, issuerFirstName: value})
                    }
                }
                value={state.currentEvent.issuerFirstName}
                variant={'NAME'}
            />
            <ModalInput
                disabled={false}
                handleInputChange={
                    (value) => {
                        setCurrentBackendEvent({...state.currentEvent, issuerLastName: value})
                    }
                }
                value={state.currentEvent.issuerLastName}
                variant={'SURNAME'}
            />
            <ModalInput
                disabled={false}
                handleInputChange={
                    (value) => {
                        setCurrentBackendEvent({...state.currentEvent, numberOfPeople: +value})
                    }
                }
                value={state.currentEvent.numberOfPeople + ""}
                variant={'NUMBER_OF_PEOPLE'}
            />
            <ModalInput
                disabled={false}
                handleInputChange={
                    (value) => {
                        setCurrentBackendEvent({...state.currentEvent, description: value})
                    }
                }
                value={state.currentEvent.description as string}
                variant={'DESC'}
            />
            <div className='booking-modal__buttons'>
                <ModalButton handleClick={() => toggleModal(false)} title='Ok'/>
                <ModalButton handleClick={() => toggleModal(false)} title='Cancel'/>
            </div>
        </div>
    );
};
