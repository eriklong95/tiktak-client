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

    const myTurn = (demo_game.playerA === props.user && demo_game.gameState.turn === 'A') || (demo_game.playerB === props.user && demo_game.gameState.turn === 'B');

    return (
        <>
            <p>If you wanna play, you've come to the right place!</p>
            <p>Game ID: {props.gameId}</p>
            <p>It is {myTurn ? '' : 'not'} your turn.</p>
            <Board moves={demo_game.gameState.moves} />
            <button onClick={() => props.setUserMode('browsing')}>Return to my page</button>
        </>
    );
}

export default Playground;