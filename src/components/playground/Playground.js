import useData from "../../hooks/useData";
import BoardContainer from "./BoardContainer";
import GameInfo from "./GameInfo";
import styles from "./playground.module.css";

function Playground(props) {
    const game = useData(`/games/${props.gameId}`, props.callServer);

    return (
        <div className={styles.playground}>
            <p>Game ID: {props.gameId}</p>
            <GameInfo game={game} user={props.user}/>
            <BoardContainer game={game} user={props.user} callServer={props.callServer} />
            <button onClick={() => props.setUserMode('browsing')} className={styles.exitbutton}>Return to my page</button>
        </div>
    );
}

export default Playground;