import useData from "../../hooks/useData";
import styles from "./gamelistitem.module.css";

function GameListItem(props) {
    const game = useData(`${props.host}/api/games/${props.gameId}`, props.callServer);

    function handlePlay() {
        props.openGame();
    }

    if (game !== null) {
        return (
            <li className={styles.listitem}>
                <div className={styles.field}>
                    <label>Game ID</label>
                    <input type="text" value={props.gameId} readOnly className={styles.valuebox}/>
                </div>
                <div className={styles.field}>
                    <label>Player A</label >
                    <input type="text" value={game.playerA} readOnly className={styles.valuebox}/>
                </div>
                <div className={styles.field}>
                    <label>Player B</label>
                    <input type="text" value={game.playerB} readOnly className={styles.valuebox}/>
                </div>
                <div className={styles.field}>
                    <label>Status</label>
                    <input type="text" value={game.status} readOnly className={styles.valuebox}/>
                </div>
                <button onClick={handlePlay} className={styles.playbutton}>Play</button>
            </li>
        );
    } else {
        return (
            <li>
                <label>
                    Failed to load game with ID {props.gameId}.
                </label>
            </li>
        )
    }
}

export default GameListItem;
