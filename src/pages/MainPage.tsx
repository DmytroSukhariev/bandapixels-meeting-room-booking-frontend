import { FC } from 'react';
import { CardsList } from '../components/CardList';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import '../styles/header.scss';

export const MainPage: FC = () => {
    return (
        <>
            <Header />
            <CardsList />
            <div className='container'>
                <Button />
            </div>
        </>
    );
};
