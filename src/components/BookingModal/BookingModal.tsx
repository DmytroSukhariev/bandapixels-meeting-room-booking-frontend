import React, { FC } from 'react';
import { IInput } from '../../types/IInput';
import { ModalButton } from '../ModalButton/ModalButton';
import { ModalList } from '../ModalList/ModalList';
import { ModalTitle } from '../ModalTitle/ModalTitle';
import { useOutsideClick } from '../../hooks/useOutside';
import { modalInputs } from '../../utils/arrays/input-list';
import './booking-modal.scss';

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
    const ref = React.useRef<HTMLDivElement | null>(null);
    useOutsideClick(() => toggleModal(false), ref);

    return (
        <div className='booking-modal'>
            <div className='booking-modal-overlay'>
                <div className='booking-modal__wrapper' ref={ref}>
                    <ModalTitle title={title} />
                    <ModalList
                        handleInputChange={handleInputChange}
                        inputs={inputs}
                    />
                    <div className='booking-modal__buttons'>
                        <ModalButton
                            handleClick={() => toggleModal(false)}
                            title='Ok'
                        />
                        <ModalButton
                            handleClick={() => toggleModal(false)}
                            title='Cancel'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
