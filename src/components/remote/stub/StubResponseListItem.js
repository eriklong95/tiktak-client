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
            <div className={`${styles.stubresponserow} ${props.selected && styles.selected}`}>
                <div className={styles.fields}>
                    <div className={styles.name}>
                        <label className={styles.namelabel}>Name:</label>
                        <input type="text" value={name} readOnly className={styles.namebox}/>
                    </div>
                    <div className={styles.request}>
                        <label className={styles.requestlabel}>Request:</label>
                        <input type="text" value={method} readOnly className={styles.method} />
                        <input type="text" value={url} readOnly className={styles.url} />
                    </div>
                    <div className={styles.response}>
                        <label>Response:</label>
                        <input type="text" value={status} readOnly className={styles.status} />
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={() => handleCopy(url, status)}>Copy</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </li>
    );
}

export default StubResponseListItem;
