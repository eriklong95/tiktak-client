import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'

const USER = { username: "andrew1990", rank: 51 }
const GAMES = [
    {
        _id: "0000",
        playerA: "andrew1990",
        playerB: "boris1991"
    },
    {
        _id: "1111",
        playerA: "andrew1990",
        playerB: "charlie1989"
    }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App user={USER} games={GAMES} />
);