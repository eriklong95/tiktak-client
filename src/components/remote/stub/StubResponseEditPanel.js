import { useEffect, useState } from "react";

function StubResponseEditPanel(props) {
    const stubResponseToEdit = props.stubResponses.find(r => r.id === props.editId);
    const [method, setMethod] = useState(stubResponseToEdit.onRequest.method);
    const [url, setUrl] = useState(stubResponseToEdit.onRequest.url);
    const [status, setStatus] = useState(stubResponseToEdit.thenRespond.status);

    function handleApply(event, stubId, method, url, status) {
        event.preventDefault();
        props.setStubResponses(previous => previous.map(r => {
            if (r.id === stubId) {
                const updatedStubResponse = {
                    id: stubId,
                    onRequest: new Request(url, { method: method }),
                    thenRespond: new Response('', { status: status })
                };
                return updatedStubResponse;
            } else {
                return r;
            }
        }));
    }

    function handleReset(event) {
        event.preventDefault();
        setMethod(stubResponseToEdit.onRequest.method);
        setUrl(stubResponseToEdit.onRequest.url);
        setStatus(stubResponseToEdit.thenRespond.status);
    }

    function handleDone(event, stubId, method, url, status) {
        event.preventDefault();
        handleApply(event, stubId, method, url, status);
    }

    return (
        <section>
            <p>Edit stub response</p>
            <form onSubmit={e => handleApply(e, props.editId, method, url, status)}>
                <label>
                    Request:
                    <input type="text" value={method} onChange={e => setMethod(e.target.value)} />
                    <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
                </label>
                <label>
                    Response: <input type="number" value={status} onChange={e => setStatus(e.target.value)} />
                </label>
                <button>Apply</button>
                <button onClick={e => handleReset(e)}>Reset</button>
                <button onClick={e => handleDone(e, props.editId, method, url, status)}>Done</button>
            </form>
        </section>
    );
}

export default StubResponseEditPanel;