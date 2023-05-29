import useData from "../../hooks/useData";
import styles from "./gamelistitem.module.css";

function GameListItem(props) {
    // The ID of the game is available as props.gameId.

    // The useData hook GETs the URL passed to it.
    const game = useData('url1'); // TODO: insert the appropriate URL
    const winner = useData('url2'); // TODO: insert the appropriate URL

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
                    <label>Winner</label>
                    <input type="text" value={winner} readOnly className={styles.valuebox}/>
                </div>
                <button onClick={handlePlay} className={styles.playbutton}>Play</button>
            </li>
        );
    } else {
        return (
            <li>
                <label>
                    Loading game with ID {props.gameId} ...
                </label>
            </li>
        )
    }
}

export default GameListItem;
