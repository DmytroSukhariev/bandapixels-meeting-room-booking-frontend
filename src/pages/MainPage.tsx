import { FC } from 'react';
import { CardsList } from '../components/CardList';
import { Header } from '../components/Header';
import '../styles/header.scss';

export const MainPage: FC = () => {
    return (
        <>
            <Header />
            <CardsList />
        </>
    );
};
