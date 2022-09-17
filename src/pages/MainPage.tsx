import { FC } from 'react';
import { CardsList } from '../components/CardList';
import { Header } from '../components/Header';
import { Button } from '../components/Button';

export const MainPage: FC = () => {
    return (
        <>
            <Header />
            <CardsList />
            <Button />
        </>
    );
};
