import useData from "../../hooks/useData";
import BoardContainer from "./BoardContainer";
import styles from "./playground.module.css";

function Playground(props) {
    const game = useData(`${props.host}/api/games/${props.gameId}`, props.callServer);

    return (
        <div className={styles.playground}>
            <p>If you wanna play, you've come to the right place!</p>
            <p>Game ID: {props.gameId}</p>
            <BoardContainer game={game} user={props.user} />
            <button onClick={() => props.setUserMode('browsing')}>Return to my page</button>
        </div>
    );
}

export default Playground;