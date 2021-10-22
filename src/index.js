import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import firebase from "firebase/compat";
import {BrowserRouter } from "react-router-dom";

firebase.initializeApp({
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
});

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

