import { useState } from "react"

export default function ServerConnectionConfig(props) {
    const [host, setHost] = useState('');
    const [withStubs, setWithStubs] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    function handleOk() {
        props.setServerConnection(previous => {
            return {...previous, host: host, withStubs: withStubs};
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
                    <input id="stub-responses" checked={withStubs} type="checkbox" onChange={e => setWithStubs(e.target.checked)} />
                    <button>OK</button>
                </form>
            </dialog>
        </>
    );
}
