function GameListItem(props) {
    // get the game from the server using props.gameId
    const game = {
        _id: 'gs7d8ga8gd3', // should equal props.gameId
        playerA: 'erik',
        playerB: 'niels',
        status: 'ongoing'
    }

    function handlePlay() {

    }

    return (
        <li>
            <label>
                Player A: <input type="text" value={game.playerA} readOnly/>
            </label>
            <label>
                Player B: <input type="text" value={game.playerB} readOnly/>
            </label>
            <label>
                Status: <input type="text" value={game.status} readOnly/>
            </label>
            <button onClick={handlePlay}>Play</button>
        </li>
    );
}

export default GameListItem;
