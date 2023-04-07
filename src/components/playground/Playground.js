function Playground(props) {
    // should receive game ID in props
    // then sync data to get game data

    const demo_game = {
        _id: props.gameId,
        playerA: props.user,
        playerB: 'stranger',
        status: 'ongoing',
        gameState: {
            turn: 'B',
            moves: []
        }
    }

    const myTurn = (demo_game.playerA === props.user && demo_game.gameState.turn === 'A') || (demo_game.playerB === props.user && demo_game.gameState.turn === 'B');

    return (
        <>
            <p>If you wanna play, you've come to the right place!</p>
            <p>Game ID: {props.gameId}</p>
            <p>It is {myTurn ? '' : 'not'} your turn.</p>
            <button onClick={() => props.setUserMode('browsing')}>Return to my page</button>
        </>
    );
}

export default Playground;