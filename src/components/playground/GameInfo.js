import styles from "./gameinfo.module.css";

function GameInfo(props) {
    if (props.game === null) {
        return (
            <section className={styles.gameinfo}>
                <p>Failed to load game details</p>
            </section>
        )
    }

    const userIsA = props.game.playerA === props.user;
    const opponentUsername = userIsA ? props.game.playerB : props.game.playerB;
    const myTurn = (userIsA && props.game.gameState.turn === 'A') || (!userIsA && props.game.gameState.turn === 'B');

    return (
        <section className={styles.gameinfo}>
            <p>Welcome to the game, {props.user}!</p>
            <p>You are {userIsA ? 'A' : 'B'} in this game. Your opponent is {opponentUsername}.</p>
            <p>It is {myTurn ? '' : 'not'} your turn.</p>
        </section>
    );
}

export default GameInfo;