import CreateGame from './games/CreateGame';
import GameListItem from './games/GameListItem';
import styles from './mygames.module.css';
import { useState } from 'react';


function MyGames(props) {
    const [gameIds, setGameIds] = useState([]);
    refreshGameList();

    function refreshGameList() {
        props.callServer(
            new Request(
                `${props.host}/games?username=${props.user}`,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                }
            )).then(response => {
                response.json()
            }).then(data => {
                setGameIds(data);
            }).catch(error => {
                console.error('Failed to load games');
            });
    }

    function openGame(id) {
        props.setActiveGameId(id);
        props.setUserMode('playing');
    }

    return (
        <div className={styles.mygamespanel}>
            <h2>My games</h2>
            <button onClick={refreshGameList}>Refresh</button>
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
