import CreateGame from './games/CreateGame';
import GameList from './games/GameList';
import styles from './mygames.module.css';
import { useState } from 'react';


function MyGames(props) {
    const [gameIds, setGameIds] = useState([]);

    function refreshGameList() {
        // This function should update list of IDs 
        // of games in which the user participates.

        const request = new Request('url', {}); // TODO: replace with the appropriate request

        fetch(request).then(response => {
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
            <GameList gameIds={gameIds} openGame={openGame} setUserMode={props.setUserMode} />
            <CreateGame user={props.user} host={props.host} refreshGameList={refreshGameList} />
            <button onClick={refreshGameList}>Refresh list</button>
        </div>
    );
}

export default MyGames;
