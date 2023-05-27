import { useState } from "react";
import BoardContainer from "./BoardContainer";
import GameInfo from "./GameInfo";
import styles from "./playground.module.css";

function Playground(props) {
    const [game, setGame] = useState(null);

    function refreshGame() {
        props.callServer(new Request(
            `/games/${props.gameId}`
        )).then(response => {
            return response.json();
        }).then(data => {
            setGame(data);
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div className={styles.playground}>
            <p>Game ID: {props.gameId}</p>
            <GameInfo game={game} refreshGame={refreshGame} user={props.user}/>
            <BoardContainer game={game} refreshGame={refreshGame} user={props.user} callServer={props.callServer} />
            <button onClick={() => props.setUserMode('browsing')} className={styles.exitbutton}>Return to my page</button>
        </div>
    );
}

export default Playground;