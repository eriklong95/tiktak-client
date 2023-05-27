import Board from "./Board";

function BoardContainer(props) {

    function makeMove(x, y) {
        const userIsA = props.game.playerA === props.user;
        const myTurn = true;

        if (!myTurn) {
            alert('It is not your turn.')
            return;
        }

        const myRole = userIsA ? 'A' : 'B';

        const request = new Request(`/games/${props.game.id}/moves`, {
            method: 'POST',
            body: JSON.stringify({ x: x, y: y, occupier: myRole })
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

    if (props.game !== null) {
        return <Board moves={props.game.moves} makeMove={makeMove} />
    } else {
        return <p>Failed to load game.</p>
    }
}

export default BoardContainer;
