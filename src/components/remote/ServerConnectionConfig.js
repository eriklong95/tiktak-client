import { useState } from "react"

export default function ServerConnectionConfig(props) {
    const [host, setHost] = useState('');
    const [stubResponses, setStubResponses] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    function handleOk() {
        props.setServerConnection(previous => {
            return {...previous, host: host, stubResponses: stubResponses};
        });

        setDialogOpen(false);
    }

    return (
        <>
            <button onClick={() => setDialogOpen(true)}>Configure server connection</button>
            <dialog open={dialogOpen} onClose={handleOk}>
                <form method="dialog">
                    <label htmlFor="host-name">Host</label>
                    <input id="host-name" value={host} type="text" onChange={e => setHost(e.target.value)} />
                    <label htmlFor="stub-responses">Stub server responses</label>
                    <input id="stub-responses" checked={stubResponses} type="checkbox" onChange={e => setStubResponses(e.target.checked)} />
                    <button>OK</button>
                </form>
            </dialog>
        </>
    );
}