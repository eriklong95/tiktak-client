import { useState } from "react";
import { nanoid } from "nanoid";

function StubResponseListItem(props) {
    const method = props.stubResponse.onRequest.method;
    const url = props.stubResponse.onRequest.url;
    const status = props.stubResponse.thenRespond.status;

    function handleEdit() {
        props.setEditId(props.stubResponse.id);
    }

    function handleCopy(url, status) {
        const copy = {
            id: nanoid(),
            onRequest: new Request(url),
            thenRespond: new Response('', { status: status })
        };
        props.setStubResponses(previous => [...previous, copy]);
    }

    function handleDelete() {
        props.setStubResponses(previous => previous.filter(r => r.id !== props.stubResponse.id))
    }

    return (
        <li>
            <form onSubmit={e => e.preventDefault()}>
                <label>
                    Request:
                    <input type="text" value={method} readOnly/>
                    <input type="text" value={url} readOnly/>
                </label>
                <label>
                    Response: <input type="text" value={status} readOnly/>
                </label>

                <button onClick={handleEdit}>Edit</button>

                <button onClick={() => handleCopy(url, status)}>Copy</button>
                <button onClick={handleDelete}>Delete</button>
            </form>
        </li>
    );
}

export default StubResponseListItem;