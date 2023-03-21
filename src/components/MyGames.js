import CreateGame from './games/CreateGame';
import Game from './games/Game';

function MyGames() {
    return (
        <div>
            <p>A lot of games!</p>
            <ul>
                <li>
                    <Game />
                </li>
                <li>
                    <Game />
                </li>
            </ul>
            <CreateGame />
        </div>
    );
}

export default MyGames;