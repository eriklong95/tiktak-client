import { useState } from "react";
import styles from "./editpanel.module.css";

function StubResponseEditPanel(props) {
    const stubResponseToEdit = props.stubResponses.find(r => r.id === props.editId);

    if (stubResponseToEdit === undefined) {
        return <></>;
    }

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

    return (
        <div className={styles.editpanel}>
            <h2>Edit stub response</h2>
            <div>
                <div className={styles.editsections}>
                    <section>
                        <label className={styles.fieldcontainer}>
                            Name
                            <input type="text" value={name} onChange={e => setName(e.target.value)} />
                        </label>
                    </section>
                    <section className={styles.requestsection}>
                        <h3>Request</h3>
                        <div className={styles.request}>
                            <label className={styles.fieldcontainer}>
                                HTTP method
                                <select value={method} onChange={e => setMethod(e.target.value)}>
                                    <option>GET</option>
                                    <option>HEAD</option>
                                    <option>POST</option>
                                    <option>PUT</option>
                                    <option>DELETE</option>
                                    <option>PATCH</option>
                                </select>
                            </label>
                            <label className={styles.fieldcontainer}>
                                URL
                                <input type="text" value={url} onChange={e => setUrl(e.target.value)} className={styles.url}/>
                            </label>
                        </div>
                        <div>
                            <textarea placeholder="Request body" value={requestBody} onChange={e => setRequestBody(e.target.value)} />
                        </div>
                    </section>
                    <section className={styles.responsesection}>
                        <h3>Response</h3>
                        <div className={styles.response}>
                            <label className={styles.fieldcontainer}>
                                Status code
                                <input type="number" value={status} onChange={e => setStatus(e.target.value)} />
                            </label>
                        </div>
                        <div>
                            <textarea placeholder="Response body" value={responseBody} onChange={e => setResponseBody(e.target.value)} />
                        </div>
                    </section>
                </div>
                <div className={styles.buttons}>
                    <button onClick={e => handleApply(e)}>Apply</button>
                    <button onClick={e => handleReset(e)}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default StubResponseEditPanel;
