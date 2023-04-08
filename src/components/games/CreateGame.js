import { useState } from "react";
import CreateGameDialog from "./CreateGameDialog";
import CreateGameInfoBox from "./CreateGameInfoBox";

function CreateGame(props) {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [infoOpen, setInfoOpen] = useState(false);
    const [infoMessage, setInfoMessage] = useState('');

    return (
        <>
            <button onClick={() => setDialogOpen(true)}>Create a new game!</button>
            <CreateGameDialog
                open={dialogOpen}
                setDialogOpen={setDialogOpen}
                user={props.user}
                callServer={props.callServer}
                host={props.host}
                setInfoOpen={setInfoOpen}
                setInfoMessage={setInfoMessage}
            />
            <CreateGameInfoBox open={infoOpen} message={infoMessage} setOpen={setInfoOpen} />
        </>
    );
}

export default CreateGame;
