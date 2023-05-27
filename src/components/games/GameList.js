import GameListItem from "./GameListItem";

function GameList(props) {
    props.refreshGameList();
    return (
        <ul>
            {props.gameIds.map(i =>
                <GameListItem gameId={i} key={i} callServer={props.callServer}
                    setUserMode={props.setUserMode}
                    openGame={() => props.openGame(i)}
                />
            )}
        </ul>
    );
}

export default GameList;