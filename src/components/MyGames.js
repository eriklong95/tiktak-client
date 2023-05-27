import CreateGame from './games/CreateGame';
import GameList from './games/GameList';
import styles from './mygames.module.css';
import { useState } from 'react';


function MyGames(props) {
    const [gameIds, setGameIds] = useState([]);

    function refreshGameList() {
        props.callServer(
            new Request(
                `/games?username=${props.user}`,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                }
            )).then(response => {
                return response.json();
            }).then(data => {
                setGameIds(data);
            }).catch(error => {
                console.error('Failed to load games', error);
            });
    }

    function openGame(id) {
        props.setActiveGameId(id);
        props.setUserMode('playing');
    }

    return (
        <div className={styles.mygamespanel}>
            <h2>My games</h2>
            <GameList gameIds={gameIds} refreshGameList={refreshGameList} openGame={openGame} callServer={props.callServer} setUserMode={props.setUserMode} />
            <CreateGame user={props.user} callServer={props.callServer} host={props.host} refreshGameList={refreshGameList} />
            <button onClick={refreshGameList}>Refresh list</button>
        </div>
    );
}

export default MyGames;
