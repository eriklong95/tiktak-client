import { useState } from "react";
import Board from "./Board";

function Playground(props) {
    // should receive game ID in props
    // then sync data to get game data

    const demo_game = {
        _id: props.gameId,
        playerA: props.user,
        playerB: 'stranger',
        status: 'ongoing',
        gameState: {
            turn: 'A',
            moves: [
                {
                    x: 0,
                    y: 0,
                    occupier: 'A'
                },
                {
                    x: 1,
                    y: 1,
                    occupier: 'B'
                }
            ]
        }
    }

    // should get this state by syncing with the server
    const [game, setGame] = useState(demo_game);
    const userIsA = game.playerA === props.user;
    const myTurn = (userIsA && game.gameState.turn === 'A') || (!userIsA && game.gameState.turn === 'B');

    function makeMove(x, y) {
        // calls userIsA to find out whether the user is A or B
        // calls the server
        // uses props.gameId to find the game

        
        if (myTurn) {
            throw new Error('It is not your turn.')
        }
        
        const myRole = userIsA ? 'A' : 'B';
        const opponentRole = userIsA ? 'B' : 'A';

        setGame(previous => {
            return {
                ...previous,
                gameState: {
                    ...previous.gameState,
                    turn: opponentRole,
                    moves: [...previous.gameState.moves, { x: x, y: y, occupier: myRole }]
                }
            }
        });
    }


    return (
        <>
            <p>If you wanna play, you've come to the right place!</p>
            <p>Game ID: {props.gameId}</p>
            <p>It is {myTurn ? '' : 'not'} your turn.</p>
            <Board moves={game.gameState.moves} makeMove={makeMove} />
            <button onClick={() => props.setUserMode('browsing')}>Return to my page</button>
        </>
    );
}

export default Playground;