import { useState } from "react";
import StubResponsesDialog from "./StubResponsesDialog";

function StubResponsesConfig(props) {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <>
            <StubResponsesDialog open={dialogOpen} setOpen={setDialogOpen} stubResponses={props.stubResponses} setStubResponses={props.setStubResponses} />
            <button onClick={() => setDialogOpen(true)}>View stub responses</button>
        </>
    );
}

export default StubResponsesConfig;