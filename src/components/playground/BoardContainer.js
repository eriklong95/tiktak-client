import Board from "./Board";

function BoardContainer(props) {

    function makeMove(x, y) {
        const userIsA = props.game.playerA === props.user;
        const myTurn = (userIsA && props.game.gameState.turn === 'A') || (!userIsA && props.game.gameState.turn === 'B');

        if (myTurn) {
            throw new Error('It is not your turn.')
        }

        const myRole = userIsA ? 'A' : 'B';

        const request = new Request(`${props.host}/api/games/${props.game.id}/moves`, {
            method: 'POST',
            body: `{"x": ${x}, "y": ${y}, "occupier": "${myRole}"}`
        });
        props.callServer(request).then(response => {
            if (response.ok) {
                console.log('Successfully made move!')
            } else {
                console.log('Making move failed')
            }
        }).catch(error => {
            console.log(error.message);
        });
    }

    function validGame(game) {
        return game !== null && game.gameState !== undefined;
    }


    if (validGame(props.game)) {
        return <Board moves={props.game.gameState.moves} makeMove={makeMove} />
    } else {
        return <p>Failed to load game.</p>
    }
}

export default BoardContainer;
