import { useState } from "react"

function ServerConnectionConfig(props) {
    const [hostInput, setHostInput] = useState('');
    const [withStubsInput, setWithStubsInput] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    function handleOk(event) {
        event.preventDefault();
        props.setHost(hostInput);
        props.setWithStubs(withStubsInput);
        setDialogOpen(false);
    }

    function handleCancel(event) {
        event.preventDefault();
        setDialogOpen(false);
    }

    return (
        <>
            <button onClick={() => setDialogOpen(true)}>Configure server connection</button>
            <dialog open={dialogOpen}>
                <form method="dialog">
                    <label htmlFor="host-name">Host</label>
                    <input id="host-name" value={hostInput} type="text" onChange={e => setHostInput(e.target.value)} />
                    <label htmlFor="stub-responses">Stub server responses</label>
                    <input id="stub-responses" checked={withStubsInput} type="checkbox" onChange={e => setWithStubsInput(e.target.checked)} />
                    <button onClick={e => handleOk(e)}>OK</button>
                    <button onClick={e => handleCancel(e)}>Cancel</button>
                </form>
            </dialog>
        </>
    );
}

export default ServerConnectionConfig;
