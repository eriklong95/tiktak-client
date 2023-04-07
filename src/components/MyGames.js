import { useState } from 'react';
import CreateGame from './games/CreateGame';
import GameListItem from './games/GameListItem';


function MyGames(props) {
    const GAME_IDS = ['ashjd3dgiu', 'adhohasd'];

    // gameIds should be obtained by syncing with server
    const [gameIds, setGameIds] = useState(GAME_IDS);

    function openGame(id) {
        props.setActiveGameId(id);
        props.setUserMode('playing');
    }

    return (
        <>
            <p>My games</p>
            <ul>
                { gameIds.map(i => <GameListItem gameId={i} key={i} setUserMode={props.setUserMode} openGame={() => openGame(i)} />) }
            </ul>
            <CreateGame user={props.user} />
        </>
    );
}

export default MyGames;