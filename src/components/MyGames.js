import CreateGame from './games/CreateGame';
import Game from './games/Game';

function MyGames(props) {
    return (
        <>
            <p>My games</p>
            <ul>
                {props.games.map(g => <li>{Game(g)}</li>)}
            </ul>
            <CreateGame />
        </>
    );
}

export default MyGames;