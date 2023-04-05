import { nanoid } from "nanoid";
import StubResponseListItem from "./StubResponseListItem";

function StubResponsesDialog(props) {
    return (
        <dialog open={props.open}>
            <p>An overview of all stub responses</p>
            <ul>
                { props.stubResponses.map(r => <StubResponseListItem stubResponse={r} key={nanoid()} setStubResponses={props.setStubResponses} />) }
            </ul>
            <button onClick={() => props.setStubResponses(previous => [...previous, { id: nanoid(), onRequest: new Request('http://localhost:5000/api/users'), thenRespond: new Response('body', { status: 200 }) }])}>Create new stub response</button>
            <button onClick={() => props.setOpen(false)}>OK</button>
        </dialog>
    );
}

export default StubResponsesDialog;
