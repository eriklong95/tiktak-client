import { nanoid } from "nanoid";

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
            <form onSubmit={e => e.preventDefault()}>
                <label>
                    Name:
                    <input type="text" value={name} readOnly/>
                </label>
                <label>
                    Request:
                    <input type="text" value={method} readOnly/>
                    <input type="text" value={url} readOnly/>
                </label>
                <label>
                    Response: 
                        <input type="text" value={status} readOnly/>
                </label>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={() => handleCopy(url, status)}>Copy</button>
                <button onClick={handleDelete}>Delete</button>
                { props.marked && <label>this</label> }
            </form>
        </li>
    );
}

export default StubResponseListItem;
