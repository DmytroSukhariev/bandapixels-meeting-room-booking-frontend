import { FC } from 'react';
import '../../styles/button.scss';
import { ArrowRight } from './ArrowRight';

export const Button: FC = () => {
    return (
        <button type='button' className='button'>
            <p className='button__text'>NEXT</p>

            <ArrowRight />
        </button>
    );
};
