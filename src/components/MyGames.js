import { useState } from 'react';
import CreateGame from './games/CreateGame';
import GameListItem from './games/GameListItem';


function MyGames(props) {
    const GAMES = [
        {
            _id: 'dsj0h2h3d',
            playerA: props.user,
            playerB: 'otherUser'
        },
        {
            _id: 'sd9asuey23',
            playerA: props.user,
            playerB: 'stranger'
        }
    ]
    const [games, setGames] = useState(GAMES);

    function addGame(game) {
        setGames(previous => [...previous, game]);
    }

    return (
        <>
            <p>My games</p>
            <ul>
                { games.map(g => <GameListItem id={g._id} playerA={g.playerA} playerB={g.playerB} key={g._id}/>) }
            </ul>
            <CreateGame user={props.user} addGame={addGame} />
        </>
    );
}

export default MyGames;