import CreateGame from './games/CreateGame';
import GameListItem from './games/GameListItem';
import useData from '../hooks/useData';
import styles from './mygames.module.css';


function MyGames(props) {
    const gameIds = useData(`${props.host}/api/games?username=${props.user}`, props.callServer);

    function openGame(id) {
        props.setActiveGameId(id);
        props.setUserMode('playing');
    }

    return (
        <div className={styles.mygamespanel}>
            <h2>My games</h2>
            <ul>
                {gameIds !== null && gameIds.map(i =>
                    <GameListItem gameId={i} key={i} callServer={props.callServer}
                        host={props.host} setUserMode={props.setUserMode}
                        openGame={() => openGame(i)}
                    />
                )}
            </ul>
            <CreateGame user={props.user} callServer={props.callServer} host={props.host} />
        </div>
    );
}

export default MyGames;
