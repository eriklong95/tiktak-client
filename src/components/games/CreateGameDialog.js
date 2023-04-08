import { useState } from "react";

function CreateGameDialog(props) {
    const [opponent, setOpponent] = useState('');

    function handleConfirm(event) {
        event.preventDefault();
        props.setDialogOpen(false);
        const body = {
            challenger: props.user,
            opponent: opponent,
        }
        const request = new Request(props.host + '/api/games', {
            method: 'POST',
            body: JSON.stringify(body),
        });
        props.callServer(request).then(response => {
            if (response.ok) {
                props.setInfoMessage('A new game was successfully created.')
            } else {
                props.setInfoMessage('Failed to create new game.')
            }
            props.setInfoOpen(true);
        }).catch(error => {
            console.error('Unexpected error: ', error);
        });
    }

    return (
        <dialog open={props.open}>
            <form method="dialog">
                <p>You are about to create a new game. Who do you want to play with?</p>
                <label>
                    Opponent: <input type="text" value={opponent} onChange={e => setOpponent(e.target.value)} />
                </label>
                <button onClick={e => handleConfirm(e)}>Confirm</button>
            </form>
        </dialog>
    );
}

export default CreateGameDialog;
