import CreateGame from './games/CreateGame';
import GameListItem from './games/GameListItem';
import useData from '../hooks/useData';


function MyGames(props) {
    const gameIds = useData(`${props.host}/api/games`, props.callServer);

    function openGame(id) {
        props.setActiveGameId(id);
        props.setUserMode('playing');
    }

    return (
        <>
            <p>My games</p>
            <ul>
                { gameIds !== null && gameIds.map(i => <GameListItem gameId={i} key={i} callServer={props.callServer} host={props.host} setUserMode={props.setUserMode} openGame={() => openGame(i)} />) }
            </ul>
            <CreateGame user={props.user} callServer={props.callServer} host={props.host} />
        </>
    );
}

export default MyGames;
