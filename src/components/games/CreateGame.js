import { useState } from "react";
import CreateGameDialog from "./CreateGameDialog";

function CreateGame(props) {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <>
            <button onClick={() => setDialogOpen(true)}>Create a new game!</button>
            <CreateGameDialog open={dialogOpen} setDialogOpen={setDialogOpen} user={props.user} />
        </>
    );
}

export default CreateGame;