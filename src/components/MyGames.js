import { useState } from 'react';
import CreateGame from './games/CreateGame';
import GameListItem from './games/GameListItem';


function MyGames(props) {
    const GAME_IDS = ['ashjd3dgiu', 'adhohasd'];

    // gameIds should be obtained by syncing with server
    const [gameIds, setGameIds] = useState(GAME_IDS);

    return (
        <>
            <p>My games</p>
            <ul>
                { gameIds.map(i => <GameListItem gameId={i} key={i}/>) }
            </ul>
            <CreateGame user={props.user} callServer={props.callServer} host={props.host} />
        </>
    );
}

export default MyGames;