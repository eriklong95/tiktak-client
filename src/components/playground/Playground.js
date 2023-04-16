import useData from "../../hooks/useData";
import BoardContainer from "./BoardContainer";

function Playground(props) {
    const game = useData(`${props.host}/api/games/${props.gameId}`, props.callServer);

    return (
        <>
            <p>If you wanna play, you've come to the right place!</p>
            <p>Game ID: {props.gameId}</p>
            <BoardContainer game={game} user={props.user} />
            <button onClick={() => props.setUserMode('browsing')}>Return to my page</button>
        </>
    );
}

export default Playground;