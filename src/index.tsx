import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {DataContextLayout} from "./layouts/DataContextLayout";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <DataContextLayout>
            <App/>
        </DataContextLayout>
    </React.StrictMode>
);
