import CreateGame from './games/CreateGame';
import Game from './games/Game';

function MyGames(props) {
    return (
        <>
            <p>My games</p>
            <ul>
                {props.games.map(g => <li key={g._id}><Game id={g._id} playerA={g.playerA} playerB={g.playerB} /></li>)}
            </ul>
            <CreateGame />
        </>
    );
}

export default MyGames;