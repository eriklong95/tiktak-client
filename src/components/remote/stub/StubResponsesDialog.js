import { nanoid } from "nanoid";
import StubResponseListItem from "./StubResponseListItem";
import StubResponseEditPanel from "./StubResponseEditPanel";
import { useState } from "react";

function StubResponsesDialog(props) {
    const [editId, setEditId] = useState(props.stubResponses[0].id);

    return (
        <dialog open={props.open}>
            <p>An overview of all stub responses</p>
            <ul>
                { props.stubResponses.map(r => <StubResponseListItem stubResponse={r} key={nanoid()} setStubResponses={props.setStubResponses} setEditId={setEditId} />) }
            </ul>
            <StubResponseEditPanel stubResponses={props.stubResponses} setStubResponses={props.setStubResponses} editId={editId} key={editId} />
            <button onClick={() => props.setStubResponses(previous => [...previous, { id: nanoid(), onRequest: new Request('http://localhost:5000/api/users'), thenRespond: new Response('body', { status: 200 }) }])}>Create new stub response</button>
            <button onClick={() => props.setOpen(false)}>OK</button>
        </dialog>
    );
}

export default StubResponsesDialog;
