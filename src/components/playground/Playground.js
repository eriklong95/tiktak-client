import { useState } from "react";
import BoardContainer from "./BoardContainer";
import GameInfo from "./GameInfo";
import styles from "./playground.module.css";

function Playground(props) {
    const [game, setGame] = useState(null);
    const [turn, setTurn] = useState(false);
    
    function refreshGame() {
        // The ID of the game is available as props.gameId

        // This function should update the game data ...
        const gameInfoRequest = new Request('url1'); // TODO: insert the appropriate URL

        fetch(gameInfoRequest).then(response => {
            return response.json();
        }).then(data => {
            setGame(data);
        }).catch(error => {
            console.log(error);
        });

        // ... and the information about whose turn it is.
        const whoseTurnRequest = new Request('url2'); // TODO: insert the appropriate URL
        fetch(whoseTurnRequest).then(response => {
            return response.json();
        }).then(data => {
            setTurn(data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className={styles.playground}>
            <p>Game ID: {props.gameId}</p>
            <GameInfo game={game} turn={turn} refreshGame={refreshGame} user={props.user}/>
            <BoardContainer game={game} turn={turn} refreshGame={refreshGame} user={props.user} />
            <button onClick={() => props.setUserMode('browsing')} className={styles.exitbutton}>Return to my page</button>
            <button onClick={refreshGame}>Refresh</button>
        </div>
    );
}

export default Playground;
