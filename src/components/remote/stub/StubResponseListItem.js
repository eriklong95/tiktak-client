import { nanoid } from "nanoid";
import styles from "./listitem.module.css"

function StubResponseListItem(props) {
    const name = props.stubResponse.name;
    const method = props.stubResponse.onRequest.method;
    const url = props.stubResponse.onRequest.url;
    const status = props.stubResponse.thenRespond.status;

    function handleEdit() {
        props.setEditId(props.stubResponse.id);
    }

    function handleCopy() {
        const newId = nanoid();
        const copy = {
            id: newId,
            name: `${name} Copy`,
            onRequest: {
                url: url,
                method: method
            },
            thenRespond: {
                status: status
            }
        };
        props.setEditId(newId);
        props.setStubResponses(previous => [...previous, copy]);
    }

    function handleDelete() {
        props.setStubResponses(previous => previous.filter(r => r.id !== props.stubResponse.id))
    }

    return (
        <li>
            <div id="row" className={styles.stubresponserow}>
                <div className={styles.fields}>
                    <label>
                        Name:
                        <input type="text" value={name} readOnly />
                    </label>
                    <label>
                        Request:
                        <input type="text" value={method} readOnly className={styles.method} />
                        <input type="text" value={url} readOnly className={styles.url} />
                    </label>
                    <label>
                        Response:
                        <input type="text" value={status} readOnly className={styles.status} />
                    </label>
                </div>
                <div className={styles.buttons}>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={() => handleCopy(url, status)}>Copy</button>
                    <button onClick={handleDelete}>Delete</button>
                    {props.marked && <label>this</label>}
                </div>
            </div>
        </li>
    );
}

export default StubResponseListItem;
