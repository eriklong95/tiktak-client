import { useState } from "react";

function CreateGameDialog(props) {
    const [opponent, setOpponent] = useState('');
    
    function handleConfirm(event) {
        event.preventDefault();
        setOpponent(opponent);
        // TODO: POST game input on server
        // the user creating the game is avaible as props.user
        // server will create id
        props.setDialogOpen(false);
    }

    return (
        <dialog open={props.open}>
            <form method="dialog">
                <p>You are about to create a new game. Who do you want to play with?</p>
                <label>
                    Opponent: <input type="text" value={opponent} onChange={e => setOpponent(e.target.value)}/>
                </label>
                <button onClick={e => handleConfirm(e)}>Confirm</button>
            </form>
        </dialog>
    );
}

export default CreateGameDialog;