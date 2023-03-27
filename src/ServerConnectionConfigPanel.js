import { useState } from "react"

export default function ServerConnectionConfigPanel(props) {
    const [host, setHost] = useState('');
    const [stubResponses, setStubResponses] = useState(true);

    function handleOk(event) {
        event.preventDefault();
        props.setServerConnection(new ServerConnection(host, stubResponses));
    }

    return (
        <>
            <p>Panel for configuring server connection.</p>
            <form onSubmit={e => handleOk(e)}>
                <input value={host} type="text" onChange={e => setHost(e.target.value)}/>
                <input checked={stubResponses} type="checkbox" onChange={e => setStubResponses(e.target.checked)}/>
                <button>OK</button>
            </form>
        </>
    );
}

class ServerConnection {
    constructor(host, stubResponses) {
        this.host = host;
        this.stubResponses = stubResponses;
    }

    // expects Fetch API Request, returns Promise of Fetch API response
    call(request) {
        return fetch(request);
    }
}