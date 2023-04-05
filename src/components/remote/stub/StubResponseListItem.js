import { useState } from "react";
import { nanoid } from "nanoid";

function StubResponseListItem(props) {
    const [mode, setMode] = useState('read'); // possible values: 'read', 'edit'
    const [url, setUrl] = useState(props.stubResponse.onRequest.url);
    const [status, setStatus] = useState(props.stubResponse.thenRespond.status);

    function handleSave(idOfThis, url, status) {
        setMode('read');
        props.setStubResponses(previous => previous.map(r => {
            if (r.id === idOfThis) {
                const updatedStubResponse = { 
                    id: idOfThis, 
                    onRequest: new Request(url), 
                    thenRespond: new Response('', { status: status }) 
                };
                return updatedStubResponse;
            } else {
                return r;
            }
        }));
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
                    Request: <input type="text" value={url} readOnly={mode === 'read'} onChange={e => setUrl(e.target.value)}/>
                </label>
                <label>
                    Response: <input type="number" value={status} readOnly={mode === 'read'} onChange={e => setStatus(e.target.value)}/>
                </label>
                { mode === 'read' ? 
                    (<button onClick={() => setMode('edit')}>Edit</button>) : 
                    (<button onClick={() => handleSave(props.stubResponse.id, url, status)}>Save</button>) 
                }
                <button onClick={() => handleCopy(url, status)}>Copy</button>
                <button onClick={handleDelete}>Delete</button>
            </form>
        </li>
    );
}

export default StubResponseListItem;