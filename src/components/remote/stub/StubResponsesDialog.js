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
                { props.stubResponses.map(r => <StubResponseListItem stubResponse={r} key={nanoid()} setStubResponses={props.setStubResponses} marked={editId === r.id} setEditId={setEditId} />) }
            </ul>
            <button onClick={() => props.setStubResponses(previous => [...previous, { id: nanoid(), onRequest: new Request('http://localhost:5000/api/users'), thenRespond: new Response('body', { status: 200 }) }])}>Create new stub response</button>
            <StubResponseEditPanel stubResponses={props.stubResponses} setStubResponses={props.setStubResponses} editId={editId} closeDialog={() => props.setOpen(false)} key={editId} />
        </dialog>
    );
}

export default StubResponsesDialog;
