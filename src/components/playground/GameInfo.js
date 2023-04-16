function GameInfo(props) {
    if (props.game === null) {
        return (
            <section>
                <p>Failed to load game details</p>
            </section>
        )
    }

    const userIsA = props.game.playerA === props.user;
    const myTurn = (userIsA && props.game.gameState.turn === 'A') || (!userIsA && props.game.gameState.turn === 'B');

    return (
        <section>
            <p>Welcome to the game, {props.user}!</p>
            <p>You are {userIsA ? 'A' : 'B'} in this game. Your opponent is {userIsA ? props.game.playerB : props.game.playerB}.</p>
            <p>It is {myTurn ? '' : 'not'} your turn.</p>
        </section>
    );
}

export default GameInfo;