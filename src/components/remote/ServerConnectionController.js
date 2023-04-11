import ServerConnectionConfig from "./ServerConnectionConfig";
import StubResponsesConfig from "./stub/StubResponsesConfig";

function ServerConnectionController(props) {
    return (
        <>
            <ServerConnectionConfig host={props.host} setHost={props.setHost} setWithStubs={props.setWithStubs} />
            { props.withStubs && (<StubResponsesConfig stubResponses={props.stubResponses} setStubResponses={props.setStubResponses} />) }
        </>
    )
}

export default ServerConnectionController;
