import React from 'react';
import './App.css';
import './components/styles/_header.scss';
import './components/styles/cards-list.scss';
import { Header } from './components/Header';
import { CardsList } from './components/CardList';

function App() {
    return (
        <>
            <Header />
            <CardsList />
        </>
    );
}

export default App;
