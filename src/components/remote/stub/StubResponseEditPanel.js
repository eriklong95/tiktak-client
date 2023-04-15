import { useState } from "react";
import styles from "./editpanel.module.css";

function StubResponseEditPanel(props) {
    const stubResponseToEdit = props.stubResponses.find(r => r.id === props.editId);

    const [name, setName] = useState(stubResponseToEdit.name);
    const [method, setMethod] = useState(stubResponseToEdit.onRequest.method);
    const [url, setUrl] = useState(stubResponseToEdit.onRequest.url);
    const [requestBody, setRequestBody] = useState(stubResponseToEdit.onRequest.body);
    const [status, setStatus] = useState(stubResponseToEdit.thenRespond.status);
    const [responseBody, setResponseBody] = useState(stubResponseToEdit.thenRespond.body);

    function handleApply(event) {
        event.preventDefault();
        props.setStubResponses(previous => previous.map(r => {
            if (r.id === props.editId) {
                const updatedStubResponse = {
                    id: props.editId,
                    name: name,
                    onRequest: {
                        url: url,
                        method: method,
                        body: requestBody 
                    },
                    thenRespond: {
                        body: responseBody,
                        status: status
                    }
                };
                return updatedStubResponse;
            } else {
                return r;
            }
        }));
    }

    function handleReset(event) {
        event.preventDefault();
        setName(stubResponseToEdit.name);
        setMethod(stubResponseToEdit.onRequest.method);
        setUrl(stubResponseToEdit.onRequest.url);
        setRequestBody(stubResponseToEdit.onRequest.body);
        setStatus(stubResponseToEdit.thenRespond.status);
        setResponseBody(stubResponseToEdit.thenRespond.body);
    }

    function handleDone(event, stubId, method, url, status) {
        event.preventDefault();
        handleApply(event, stubId, method, url, status);
        props.closeDialog();
    }

    return (
        <section className={styles.editpanel}>
            <h2>Edit stub response</h2>
            <form onSubmit={e => handleApply(e)}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Request:
                    <select value={method} onChange={e => setMethod(e.target.value)}>
                        <option>GET</option>
                        <option>HEAD</option>
                        <option>POST</option>
                        <option>PUT</option>
                        <option>DELETE</option>
                        <option>PATCH</option>
                    </select>
                    <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
                    <textarea rows="10" cols="25" value={requestBody} onChange={e => setRequestBody(e.target.value)} />
                </label>
                <br/>
                <label>
                    Response: 
                        <input type="number" value={status} onChange={e => setStatus(e.target.value)} />
                        <textarea rows="10" cols="25" value={responseBody} onChange={e => setResponseBody(e.target.value)} />
                </label>
                <br/>
                <button>Apply</button>
                <button onClick={e => handleReset(e)}>Reset</button>
                <button onClick={e => handleDone(e)}>Done</button>
            </form>
        </section>
    );
}

export default StubResponseEditPanel;
