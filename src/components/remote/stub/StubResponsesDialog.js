import { nanoid } from "nanoid";
import StubResponseListItem from "./StubResponseListItem";
import StubResponseEditPanel from "./StubResponseEditPanel";
import { useState } from "react";

function StubResponsesDialog(props) {
    const [editId, setEditId] = useState(props.stubResponses[0].id);

    function handleCreateNew() {
        const id = nanoid();
        const newStubResponse = { 
            id: id, 
            name: '',
            onRequest: {
                url: ''
            }, 
            thenRespond: {
                status: 200
            }
        };
        setEditId(id);
        props.setStubResponses(previous => [...previous, newStubResponse])
    }

    return (
        <dialog open={props.open}>
            <p>An overview of all stub responses</p>
            <ul>
                { props.stubResponses.map(r => <StubResponseListItem stubResponse={r} key={r.id} setStubResponses={props.setStubResponses} marked={editId === r.id} setEditId={setEditId} />) }
            </ul>
            <button onClick={handleCreateNew}>Create new stub response</button>
            <StubResponseEditPanel stubResponses={props.stubResponses} setStubResponses={props.setStubResponses} editId={editId} closeDialog={() => props.setOpen(false)} key={editId} />
        </dialog>
    );
}

export default StubResponsesDialog;
