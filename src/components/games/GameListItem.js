import useData from "../../hooks/useData";

function GameListItem(props) {
    const game = useData(`${props.host}/api/games/${props.gameId}`, props.callServer);

    function handlePlay() {

    }

    if (game !== null) {
        return (
            <li>
                <label>
                    Game ID: <input type="text" value={props.gameId} readOnly/>
                </label>
                <label>
                    Player A: <input type="text" value={game.playerA} readOnly/>
                </label>
                <label>
                    Player B: <input type="text" value={game.playerB} readOnly/>
                </label>
                <label>
                    Status: <input type="text" value={game.status} readOnly/>
                </label>
                <button onClick={handlePlay}>Play</button>
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
