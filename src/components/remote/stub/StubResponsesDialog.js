import StubResponseListItem from "./StubResponseListItem";

function StubResponsesDialog(props) {
    return (
        <dialog open={props.open}>
            <p>An overview of all stub responses</p>
            <ul>
                { props.stubResponses.map(r => <StubResponseListItem stubReponse={r} />) }
            </ul>
            <button onClick={() => props.setStubResponses(previous => [...previous, 0])}>Create new stub response</button>
            <button onClick={() => props.setOpen(false)}>OK</button>
        </dialog>
    );
}

export default StubResponsesDialog;