import { nanoid } from "nanoid";
import StubResponseListItem from "./StubResponseListItem";
import StubResponseEditPanel from "./StubResponseEditPanel";
import { useState } from "react";
import styles from "./dialog.module.css";

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
            <div className={styles.content}>
                <div>
                    <h1>Stub responses</h1>
                    <ul className={styles.list}>
                        {props.stubResponses.map(r => <StubResponseListItem stubResponse={r} key={r.id} setStubResponses={props.setStubResponses} selected={editId === r.id} setEditId={setEditId} />)}
                    </ul>
                    <div className={styles.buttons}>
                        <button onClick={handleCreateNew}>Create new stub response</button>
                        <button onClick={() => props.setOpen(false)}>OK</button>
                    </div>
                </div>
                <StubResponseEditPanel stubResponses={props.stubResponses} setStubResponses={props.setStubResponses} editId={editId} closeDialog={() => props.setOpen(false)} key={editId} />
            </div>
        </dialog>
    );
}

export default StubResponsesDialog;
